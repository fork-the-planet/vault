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
 * Check if a given object implements the PersonaCreateRequest interface.
 */
export function instanceOfPersonaCreateRequest(value) {
    return true;
}
export function PersonaCreateRequestFromJSON(json) {
    return PersonaCreateRequestFromJSONTyped(json, false);
}
export function PersonaCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'entityId': json['entity_id'] == null ? undefined : json['entity_id'],
        'id': json['id'] == null ? undefined : json['id'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'mountAccessor': json['mount_accessor'] == null ? undefined : json['mount_accessor'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
export function PersonaCreateRequestToJSON(json) {
    return PersonaCreateRequestToJSONTyped(json, false);
}
export function PersonaCreateRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'entity_id': value['entityId'],
        'id': value['id'],
        'metadata': value['metadata'],
        'mount_accessor': value['mountAccessor'],
        'name': value['name'],
    };
}
