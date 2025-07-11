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
 * @interface SystemWriteUtilizationRequest
 */
export interface SystemWriteUtilizationRequest {
    /**
     * Provides context about the conditions under which the report was generated and submitted. This message is not included in the license utilization bundle but will be included in the vault server logs.
     * @type {string}
     * @memberof SystemWriteUtilizationRequest
     */
    message?: string;
    /**
     * If set to true, includes only today’s snapshot data in response, no historical snapshot data. If not set, response includes all persisted snapshot data.
     * @type {boolean}
     * @memberof SystemWriteUtilizationRequest
     */
    todayOnly?: boolean;
}
/**
 * Check if a given object implements the SystemWriteUtilizationRequest interface.
 */
export declare function instanceOfSystemWriteUtilizationRequest(value: object): value is SystemWriteUtilizationRequest;
export declare function SystemWriteUtilizationRequestFromJSON(json: any): SystemWriteUtilizationRequest;
export declare function SystemWriteUtilizationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteUtilizationRequest;
export declare function SystemWriteUtilizationRequestToJSON(json: any): SystemWriteUtilizationRequest;
export declare function SystemWriteUtilizationRequestToJSONTyped(value?: SystemWriteUtilizationRequest | null, ignoreDiscriminator?: boolean): any;
