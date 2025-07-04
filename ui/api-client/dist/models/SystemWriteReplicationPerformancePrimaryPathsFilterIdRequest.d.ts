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
 * @interface SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest
 */
export interface SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest {
    /**
     * The filter mode for the paths filter (allow or deny). Defaults to allow.
     * @type {string}
     * @memberof SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest
     */
    mode?: string;
    /**
     * The paths to filter in replication. Must be a mount or a namespace.
     * @type {Array<string>}
     * @memberof SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest
     */
    paths?: Array<string>;
}
/**
 * Check if a given object implements the SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest interface.
 */
export declare function instanceOfSystemWriteReplicationPerformancePrimaryPathsFilterIdRequest(value: object): value is SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest;
export declare function SystemWriteReplicationPerformancePrimaryPathsFilterIdRequestFromJSON(json: any): SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest;
export declare function SystemWriteReplicationPerformancePrimaryPathsFilterIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest;
export declare function SystemWriteReplicationPerformancePrimaryPathsFilterIdRequestToJSON(json: any): SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest;
export declare function SystemWriteReplicationPerformancePrimaryPathsFilterIdRequestToJSONTyped(value?: SystemWriteReplicationPerformancePrimaryPathsFilterIdRequest | null, ignoreDiscriminator?: boolean): any;
