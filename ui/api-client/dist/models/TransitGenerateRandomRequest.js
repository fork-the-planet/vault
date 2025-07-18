"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfTransitGenerateRandomRequest = instanceOfTransitGenerateRandomRequest;
exports.TransitGenerateRandomRequestFromJSON = TransitGenerateRandomRequestFromJSON;
exports.TransitGenerateRandomRequestFromJSONTyped = TransitGenerateRandomRequestFromJSONTyped;
exports.TransitGenerateRandomRequestToJSON = TransitGenerateRandomRequestToJSON;
exports.TransitGenerateRandomRequestToJSONTyped = TransitGenerateRandomRequestToJSONTyped;
/**
 * Check if a given object implements the TransitGenerateRandomRequest interface.
 */
function instanceOfTransitGenerateRandomRequest(value) {
    return true;
}
function TransitGenerateRandomRequestFromJSON(json) {
    return TransitGenerateRandomRequestFromJSONTyped(json, false);
}
function TransitGenerateRandomRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bytes': json['bytes'] == null ? undefined : json['bytes'],
        'format': json['format'] == null ? undefined : json['format'],
    };
}
function TransitGenerateRandomRequestToJSON(json) {
    return TransitGenerateRandomRequestToJSONTyped(json, false);
}
function TransitGenerateRandomRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bytes': value['bytes'],
        'format': value['format'],
    };
}
