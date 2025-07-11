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
 * Check if a given object implements the NomadConfigureAccessRequest interface.
 */
export function instanceOfNomadConfigureAccessRequest(value) {
    return true;
}
export function NomadConfigureAccessRequestFromJSON(json) {
    return NomadConfigureAccessRequestFromJSONTyped(json, false);
}
export function NomadConfigureAccessRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'address': json['address'] == null ? undefined : json['address'],
        'caCert': json['ca_cert'] == null ? undefined : json['ca_cert'],
        'clientCert': json['client_cert'] == null ? undefined : json['client_cert'],
        'clientKey': json['client_key'] == null ? undefined : json['client_key'],
        'maxTokenNameLength': json['max_token_name_length'] == null ? undefined : json['max_token_name_length'],
        'token': json['token'] == null ? undefined : json['token'],
    };
}
export function NomadConfigureAccessRequestToJSON(json) {
    return NomadConfigureAccessRequestToJSONTyped(json, false);
}
export function NomadConfigureAccessRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'address': value['address'],
        'ca_cert': value['caCert'],
        'client_cert': value['clientCert'],
        'client_key': value['clientKey'],
        'max_token_name_length': value['maxTokenNameLength'],
        'token': value['token'],
    };
}
