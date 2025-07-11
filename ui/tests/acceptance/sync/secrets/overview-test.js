/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import syncScenario from 'vault/mirage/scenarios/sync';
import syncHandlers from 'vault/mirage/handlers/sync';
import { login, loginNs } from 'vault/tests/helpers/auth/auth-helpers';
import { click, waitFor, visit, currentURL } from '@ember/test-helpers';
import { PAGE as ts } from 'vault/tests/helpers/sync/sync-selectors';
import { GENERAL } from 'vault/tests/helpers/general-selectors';
import { deleteNS, runCmd } from 'vault/tests/helpers/commands';

// sync is an enterprise feature but since mirage is used the enterprise label has been intentionally omitted from the module name
module('Acceptance | sync | overview', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.version = this.owner.lookup('service:version');
    this.version.type = 'enterprise';
    this.server.get('/sys/license/features', () => ({ features: ['Secrets Sync'] }));
  });

  test('it redirects on community', async function (assert) {
    this.version.type = 'community';
    await login();
    await visit('/vault/sync/secrets/overview');
    assert.strictEqual(currentURL(), '/vault/dashboard', 'redirects to cluster dashboard route');
  });

  test('it redirects if enterprise but not on license', async function (assert) {
    this.server.get('/sys/license/features', () => ({ features: [] }));
    await login();
    await visit('/vault/sync/secrets/overview');
    assert.strictEqual(currentURL(), '/vault/dashboard', 'redirects to cluster dashboard route');
  });

  // this test only runs on enterprise since HVD managed is harder to stub on CE
  test('enterprise: it does not redirect if HVD managed', async function (assert) {
    this.owner.lookup('service:flags').featureFlags = ['VAULT_CLOUD_ADMIN_NAMESPACE'];
    await login();
    await visit('/vault/sync/secrets/overview');
    assert.strictEqual(currentURL(), '/vault/sync/secrets/overview', 'it navigates to overview');
  });

  module('when feature is activated', function (hooks) {
    hooks.beforeEach(async function () {
      syncHandlers(this.server);
      await login();
    });

    test('it fetches destinations and associations', async function (assert) {
      assert.expect(2);

      this.server.get('/sys/sync/destinations', () => {
        assert.true(true, 'destinations is called');
      });
      this.server.get('/sys/sync/associations', () => {
        assert.true(true, 'associations is called');
      });

      await visit('/vault/sync/secrets/overview');
    });

    test('it should transition to correct routes when performing actions', async function (assert) {
      syncScenario(this.server);
      await click(ts.navLink('Secrets Sync'));
      await click(ts.destinations.list.create);
      await click(ts.createCancel);
      await click(ts.overviewCard.actionText('Create new'));
      await click(ts.createCancel);
      await waitFor(ts.overview.table.actionToggle(0));
      await click(ts.overview.table.actionToggle(0));
      await click(ts.overview.table.action('sync'));
      await click(GENERAL.cancelButton);
      await click(ts.breadcrumbLink('Secrets Sync'));
      await waitFor(ts.overview.table.actionToggle(0));
      await click(ts.overview.table.actionToggle(0));
      await click(ts.overview.table.action('details'));
      assert.dom(GENERAL.tab('Secrets')).hasClass('active', 'Navigates to secrets view for destination');
    });
  });

  module('when feature is not activated', function (hooks) {
    hooks.beforeEach(async function () {
      let wasActivatePOSTCalled = false;
      // simulate the feature being activated once /secrets-sync/activate has been called
      this.server.get('/sys/activation-flags', () => {
        if (wasActivatePOSTCalled) {
          return {
            data: {
              activated: ['secrets-sync'],
              unactivated: [''],
            },
          };
        } else {
          return {
            data: {
              activated: [''],
              unactivated: ['secrets-sync'],
            },
          };
        }
      });

      this.server.post('/sys/activation-flags/secrets-sync/activate', () => {
        wasActivatePOSTCalled = true;
        return {};
      });
      await login();
    });

    test('it does not fetch destinations and associations', async function (assert) {
      assert.expect(0);

      this.server.get('/sys/sync/destinations', () => {
        assert.true(false, 'destinations is not called');
      });
      this.server.get('/sys/sync/associations', () => {
        assert.true(false, 'associations is not called');
      });

      await visit('/vault/sync/secrets/overview');
    });

    test('the activation workflow works', async function (assert) {
      await visit('/vault/sync/secrets/overview');

      assert
        .dom(ts.cta.button)
        .doesNotExist('create first destination is not available until feature has been activated');

      assert.dom(ts.overview.optInBanner.container).exists();
      await click(ts.overview.optInBanner.enable);

      assert
        .dom(ts.overview.activationModal.container)
        .exists('modal to opt-in and activate feature is shown');
      await click(ts.overview.activationModal.checkbox);
      await click(ts.overview.activationModal.confirm);

      assert
        .dom(ts.overview.activationModal.container)
        .doesNotExist('modal is gone once activation has been submitted');
      assert
        .dom(ts.overview.optInBanner.container)
        .doesNotExist('opt-in banner is gone once activation has been submitted');

      await click(ts.cta.button);
      assert.strictEqual(
        currentURL(),
        '/vault/sync/secrets/destinations/create',
        'create new destination is available once feature is activated'
      );
    });

    module('enterprise with namespaces', function (hooks) {
      hooks.beforeEach(async function () {
        this.version.features = ['Secrets Sync', 'Namespaces'];

        await runCmd(`write sys/namespaces/admin -f`, false);
        await loginNs('admin');
        await runCmd(`write sys/namespaces/foo -f`, false);
        await loginNs('admin/foo');
      });

      test('it should make activation-flag requests to correct namespace', async function (assert) {
        assert.expect(3);

        this.server.get('/sys/activation-flags', (_, req) => {
          assert.deepEqual(req.requestHeaders, {}, 'Request is unauthenticated and in root namespace');
          return {
            data: {
              activated: [''],
              unactivated: ['secrets-sync'],
            },
          };
        });
        this.server.post('/sys/activation-flags/secrets-sync/activate', (_, req) => {
          assert.strictEqual(
            req.requestHeaders['X-Vault-Namespace'],
            undefined,
            'Request is made to undefined namespace'
          );
          return {};
        });

        // confirm we're in admin/foo
        assert.dom('[data-test-badge-namespace]').hasText('foo');
        await click(ts.navLink('Secrets Sync'));
        await click(ts.overview.optInBanner.enable);
        await click(ts.overview.activationModal.checkbox);
        await click(ts.overview.activationModal.confirm);

        // During the namespace cleanup in the afterEach hook this endpoint is hit again which increases the assertion count (above)
        // Re-stub here without the assertion to reduce unnecessary assertions.
        this.server.get('/sys/activation-flags', () => {
          return {
            data: {
              activated: ['secrets-sync'],
              unactivated: [],
            },
          };
        });
        await visit('vault/dashboard');
        await runCmd([`delete admin/sys/namespaces/foo -f`, deleteNS('admin')]);
      });

      test('it should make activation-flag requests to correct namespace when managed', async function (assert) {
        assert.expect(3);

        const flagService = this.owner.lookup('service:flags');
        flagService.featureFlags = ['VAULT_CLOUD_ADMIN_NAMESPACE'];

        this.server.get('/sys/activation-flags', (_, req) => {
          assert.deepEqual(req.requestHeaders, {}, 'Request is unauthenticated and in root namespace');
          return {
            data: {
              activated: [''],
              unactivated: ['secrets-sync'],
            },
          };
        });
        this.server.post('/sys/activation-flags/secrets-sync/activate', (_, req) => {
          assert.strictEqual(
            req.requestHeaders['x-vault-namespace'],
            'admin',
            'Request is made to the admin namespace'
          );
          return {};
        });

        // confirm we're in admin/foo
        assert.dom('[data-test-badge-namespace]').hasText('foo');

        await click(ts.navLink('Secrets Sync'));
        await click(ts.overview.optInBanner.enable);
        await click(ts.overview.activationModal.checkbox);
        await click(ts.overview.activationModal.confirm);

        // During the namespace cleanup in the afterEach hook this endpoint is hit again which increases the assertion count (above)
        // Re-stub here without the assertion to reduce unnecessary assertions.
        this.server.get('/sys/activation-flags', () => {
          return {
            data: {
              activated: ['secrets-sync'],
              unactivated: [],
            },
          };
        });

        // Delete the admin/foo namespace
        await visit('vault/dashboard');
        await runCmd([deleteNS('foo')]);

        // Reset the HVD feature flag so that we can delete the admin namespace
        flagService.featureFlags = [];
        await login();
        await runCmd([deleteNS('admin')]);
      });
    });
  });
});
