/**
 * Copyright IBM Corp. 2016, 2025
 * SPDX-License-Identifier: BUSL-1.1
 */

import { currentRouteName, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { login } from 'vault/tests/helpers/auth/auth-helpers';
import { GENERAL } from '../helpers/general-selectors';

module('Acceptance | not-found', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    return login();
  });

  test('top-level not-found', async function (assert) {
    await visit('/not-real-route');
    assert.strictEqual(currentRouteName(), 'vault.error', 'it redirects to error route');
    assert.dom('[data-test-sidebar-nav-panel="Cluster"]').doesNotExist('sidebar nav panel does not render');
    assert
      .dom('.empty-state-content')
      .hasText(
        'Page not found Error 404 Sorry, we were unable to find any content at that URL. Double check it or go back home. Go home Learn more'
      );
    assert.dom('[data-test-app-footer]').exists('app footer still renders');
  });

  test('vault route not-found', async function (assert) {
    await visit('/vault/not-real-route');
    assert.strictEqual(currentRouteName(), 'vault.cluster.not-found', 'it redirects to not-found route');
    assert.dom('[data-test-sidebar-nav-panel="Cluster"]').exists('sidebar nav panel still renders');
    assert.dom(GENERAL.pageError.title(404)).hasText('404 Not Found');
    assert
      .dom(GENERAL.pageError.message)
      .hasText(
        'Sorry, we were unable to find any content at not-real-route. Double check the url or go back home.'
      );
    assert.dom('[data-test-app-footer]').exists('app footer still renders');
  });

  test('cluster route not-found', async function (assert) {
    const route = '/vault/secrets-engines/secret/not-real-secret/show';
    await visit(`/vault/${route}`);
    assert.strictEqual(currentRouteName(), 'vault.cluster.not-found', 'it redirects to not-found route');
    assert.dom('[data-test-sidebar-nav-panel="Cluster"]').exists('sidebar nav panel still renders');
    assert.dom(GENERAL.pageError.title(404)).hasText('404 Not Found');
    assert
      .dom(GENERAL.pageError.message)
      .hasText(
        `Sorry, we were unable to find any content at ${route}. Double check the url or go back home.`
      );
    assert.dom('[data-test-app-footer]').exists('app footer still renders');
  });

  test('secret not-found', async function (assert) {
    await visit('/vault/secrets-engines/cubbyhole/show/not-real-secret');
    assert.strictEqual(
      currentRouteName(),
      'vault.cluster.secrets.backend.error',
      'it redirects to error route'
    );
    assert.dom('[data-test-sidebar-nav-panel="Cluster"]').exists('sidebar nav panel still renders');
    assert.dom('.hds-page-header__main').hasText('404 Not Found');
    assert
      .dom('[data-test-secret-not-found]')
      .hasText('Unable to find secret at cubbyhole/. Try going back to the root and navigating from there.');
  });
});
