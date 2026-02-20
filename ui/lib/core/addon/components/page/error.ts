/**
 * Copyright IBM Corp. 2016, 2025
 * SPDX-License-Identifier: BUSL-1.1
 */

import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { ResponseError } from '@hashicorp/vault-client-typescript';
import { action } from '@ember/object';
import routerLookup from 'core/utils/router-lookup';

import type Owner from '@ember/owner';
import type ApiService from 'vault/services/api';
import type RouterService from '@ember/routing/router-service';

interface Args {
  error: ResponseError | Error;
}

type Error = {
  httpStatus?: number;
  path?: string;
  message: string;
  errors: string[];
};

enum DefaultErrorMessages {
  NOT_FOUND = 'Sorry, we were unable to find any content at',
  NOT_AUTHORIZED = 'You are not authorized to access content at',
}

export default class PageErrorComponent extends Component<Args> {
  @service declare readonly api: ApiService;

  @tracked declare error: Error;

  constructor(owner: Owner, args: Args) {
    super(owner, args);
    this.unpackError();
  }

  get displayURL() {
    // "Path" is the API path for which the request failed, show that if set.
    // Otherwise errorURL is the URL when the request failed.
    // Finally, fallback to the current URL
    return this.error?.path || this.router.currentURL;
  }

  get isDefaultMessage() {
    return (
      this.message === DefaultErrorMessages.NOT_FOUND || this.message === DefaultErrorMessages.NOT_AUTHORIZED
    );
  }

  get message(): string | DefaultErrorMessages {
    return this.error?.message || this.statusDefaults.message;
  }

  get router() {
    return routerLookup(this) as RouterService;
  }

  get statusDefaults() {
    switch (this.error?.httpStatus) {
      case 404:
        return {
          icon: 'alert-circle',
          title: 'Not Found',
          message: DefaultErrorMessages.NOT_FOUND,
        };
      case 403:
        return {
          icon: 'skip',
          title: 'Not Authorized',
          message: DefaultErrorMessages.NOT_AUTHORIZED,
        };
      default:
        return { icon: 'alert-circle', title: 'Error', message: '' };
    }
  }

  @action
  async unpackError() {
    if (this.args.error instanceof ResponseError) {
      const { status, path, response } = await this.api.parseError(this.args.error);
      this.error = {
        httpStatus: status,
        path,
        message: response?.message,
        errors: response?.errors || [],
      };
    } else {
      this.error = this.args.error;
    }
  }
}
