/* tslint:disable */
/* eslint-disable */
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
 * Check if a given object implements the AwsConfigureRoleTagDenyListTidyOperationRequest interface.
 */
export function instanceOfAwsConfigureRoleTagDenyListTidyOperationRequest(value) {
    return true;
}
export function AwsConfigureRoleTagDenyListTidyOperationRequestFromJSON(json) {
    return AwsConfigureRoleTagDenyListTidyOperationRequestFromJSONTyped(json, false);
}
export function AwsConfigureRoleTagDenyListTidyOperationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'disablePeriodicTidy': json['disable_periodic_tidy'] == null ? undefined : json['disable_periodic_tidy'],
        'safetyBuffer': json['safety_buffer'] == null ? undefined : json['safety_buffer'],
    };
}
export function AwsConfigureRoleTagDenyListTidyOperationRequestToJSON(json) {
    return AwsConfigureRoleTagDenyListTidyOperationRequestToJSONTyped(json, false);
}
export function AwsConfigureRoleTagDenyListTidyOperationRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'disable_periodic_tidy': value['disablePeriodicTidy'],
        'safety_buffer': value['safetyBuffer'],
    };
}
