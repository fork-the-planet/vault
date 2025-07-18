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
 * @interface MfaUpdatePingIdMethodRequest
 */
export interface MfaUpdatePingIdMethodRequest {
    /**
     * The unique name identifier for this MFA method.
     * @type {string}
     * @memberof MfaUpdatePingIdMethodRequest
     */
    methodName?: string;
    /**
     * The settings file provided by Ping, Base64-encoded. This must be a settings file suitable for third-party clients, not the PingID SDK or PingFederate.
     * @type {string}
     * @memberof MfaUpdatePingIdMethodRequest
     */
    settingsFileBase64?: string;
    /**
     * A template string for mapping Identity names to MFA method names. Values to subtitute should be placed in {{}}. For example, "{{alias.name}}@example.com". Currently-supported mappings: alias.name: The name returned by the mount configured via the mount_accessor parameter If blank, the Alias's name field will be used as-is.
     * @type {string}
     * @memberof MfaUpdatePingIdMethodRequest
     */
    usernameFormat?: string;
}
/**
 * Check if a given object implements the MfaUpdatePingIdMethodRequest interface.
 */
export declare function instanceOfMfaUpdatePingIdMethodRequest(value: object): value is MfaUpdatePingIdMethodRequest;
export declare function MfaUpdatePingIdMethodRequestFromJSON(json: any): MfaUpdatePingIdMethodRequest;
export declare function MfaUpdatePingIdMethodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MfaUpdatePingIdMethodRequest;
export declare function MfaUpdatePingIdMethodRequestToJSON(json: any): MfaUpdatePingIdMethodRequest;
export declare function MfaUpdatePingIdMethodRequestToJSONTyped(value?: MfaUpdatePingIdMethodRequest | null, ignoreDiscriminator?: boolean): any;
