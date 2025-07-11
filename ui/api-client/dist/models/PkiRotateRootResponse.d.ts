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
 * @interface PkiRotateRootResponse
 */
export interface PkiRotateRootResponse {
    /**
     * The generated self-signed CA certificate.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    certificate?: string;
    /**
     * The expiration of the given issuer.
     * @type {number}
     * @memberof PkiRotateRootResponse
     */
    expiration?: number;
    /**
     * The ID of the issuer
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    issuerId?: string;
    /**
     * The name of the issuer.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    issuerName?: string;
    /**
     * The issuing certificate authority.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    issuingCa?: string;
    /**
     * The ID of the key.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    keyId?: string;
    /**
     * The key name if given.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    keyName?: string;
    /**
     * The private key if exported was specified.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    privateKey?: string;
    /**
     * The requested Subject's named serial number.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    serialNumber?: string;
}
/**
 * Check if a given object implements the PkiRotateRootResponse interface.
 */
export declare function instanceOfPkiRotateRootResponse(value: object): value is PkiRotateRootResponse;
export declare function PkiRotateRootResponseFromJSON(json: any): PkiRotateRootResponse;
export declare function PkiRotateRootResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiRotateRootResponse;
export declare function PkiRotateRootResponseToJSON(json: any): PkiRotateRootResponse;
export declare function PkiRotateRootResponseToJSONTyped(value?: PkiRotateRootResponse | null, ignoreDiscriminator?: boolean): any;
