/**
 * Copyright IBM Corp. 2016, 2025
 * SPDX-License-Identifier: BUSL-1.1
 */

import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}
  // remove all flash messages by clicking the dismiss button until there are no more
  // this is useful if many are rendered over top of a button preventing click in a test
  async dismissFlashMessages() {
    const locator = this.page.getByRole('button', { name: 'Dismiss' });
    // use a while loop because clicking one might cause the next one to shift or re-render.
    while ((await locator.count()) > 0) {
      await locator.first().click();
    }
  }
}
