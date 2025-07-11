/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PkiConfigureAutoTidyResponse
 */
export interface PkiConfigureAutoTidyResponse {
    /**
     * Safety buffer after creation after which accounts lacking orders are revoked
     * @type {number}
     * @memberof PkiConfigureAutoTidyResponse
     */
    acmeAccountSafetyBuffer?: number;
    /**
     * Specifies whether automatic tidy is enabled or not
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    enabled?: boolean;
    /**
     * Specifies the duration between automatic tidy operation
     * @type {number}
     * @memberof PkiConfigureAutoTidyResponse
     */
    intervalDuration?: number;
    /**
     * Issuer safety buffer
     * @type {number}
     * @memberof PkiConfigureAutoTidyResponse
     */
    issuerSafetyBuffer?: number;
    /**
     *
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    maintainStoredCertificateCounts?: boolean;
    /**
     * The maximum amount of time in seconds auto-tidy will be delayed after startup
     * @type {number}
     * @memberof PkiConfigureAutoTidyResponse
     */
    maxStartupBackoffDuration?: number;
    /**
     * The minimum amount of time in seconds auto-tidy will be delayed after startup
     * @type {number}
     * @memberof PkiConfigureAutoTidyResponse
     */
    minStartupBackoffDuration?: number;
    /**
     * Duration to pause between tidying certificates
     * @type {string}
     * @memberof PkiConfigureAutoTidyResponse
     */
    pauseDuration?: string;
    /**
     *
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    publishStoredCertificateCountMetrics?: boolean;
    /**
     *
     * @type {number}
     * @memberof PkiConfigureAutoTidyResponse
     */
    revocationQueueSafetyBuffer?: number;
    /**
     * Safety buffer time duration
     * @type {number}
     * @memberof PkiConfigureAutoTidyResponse
     */
    safetyBuffer?: number;
    /**
     * Tidy Unused Acme Accounts, and Orders
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyAcme?: boolean;
    /**
     * Tidy cert metadata
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyCertMetadata?: boolean;
    /**
     * Specifies whether to tidy up the certificate store
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyCertStore?: boolean;
    /**
     * Tidy CMPv2 nonce store
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyCmpv2NonceStore?: boolean;
    /**
     * Tidy the cross-cluster revoked certificate store
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyCrossClusterRevokedCerts?: boolean;
    /**
     * Specifies whether tidy expired issuers
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyExpiredIssuers?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyMoveLegacyCaBundle?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyRevocationQueue?: boolean;
    /**
     * Specifies whether to associate revoked certificates with their corresponding issuers
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyRevokedCertIssuerAssociations?: boolean;
    /**
     * Specifies whether to remove all invalid and expired certificates from storage
     * @type {boolean}
     * @memberof PkiConfigureAutoTidyResponse
     */
    tidyRevokedCerts?: boolean;
}
/**
 * Check if a given object implements the PkiConfigureAutoTidyResponse interface.
 */
export declare function instanceOfPkiConfigureAutoTidyResponse(value: object): value is PkiConfigureAutoTidyResponse;
export declare function PkiConfigureAutoTidyResponseFromJSON(json: any): PkiConfigureAutoTidyResponse;
export declare function PkiConfigureAutoTidyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiConfigureAutoTidyResponse;
export declare function PkiConfigureAutoTidyResponseToJSON(json: any): PkiConfigureAutoTidyResponse;
export declare function PkiConfigureAutoTidyResponseToJSONTyped(value?: PkiConfigureAutoTidyResponse | null, ignoreDiscriminator?: boolean): any;
