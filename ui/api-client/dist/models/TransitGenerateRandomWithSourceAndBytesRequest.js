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
exports.instanceOfTransitGenerateRandomWithSourceAndBytesRequest = instanceOfTransitGenerateRandomWithSourceAndBytesRequest;
exports.TransitGenerateRandomWithSourceAndBytesRequestFromJSON = TransitGenerateRandomWithSourceAndBytesRequestFromJSON;
exports.TransitGenerateRandomWithSourceAndBytesRequestFromJSONTyped = TransitGenerateRandomWithSourceAndBytesRequestFromJSONTyped;
exports.TransitGenerateRandomWithSourceAndBytesRequestToJSON = TransitGenerateRandomWithSourceAndBytesRequestToJSON;
exports.TransitGenerateRandomWithSourceAndBytesRequestToJSONTyped = TransitGenerateRandomWithSourceAndBytesRequestToJSONTyped;
/**
 * Check if a given object implements the TransitGenerateRandomWithSourceAndBytesRequest interface.
 */
function instanceOfTransitGenerateRandomWithSourceAndBytesRequest(value) {
    return true;
}
function TransitGenerateRandomWithSourceAndBytesRequestFromJSON(json) {
    return TransitGenerateRandomWithSourceAndBytesRequestFromJSONTyped(json, false);
}
function TransitGenerateRandomWithSourceAndBytesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bytes': json['bytes'] == null ? undefined : json['bytes'],
        'format': json['format'] == null ? undefined : json['format'],
    };
}
function TransitGenerateRandomWithSourceAndBytesRequestToJSON(json) {
    return TransitGenerateRandomWithSourceAndBytesRequestToJSONTyped(json, false);
}
function TransitGenerateRandomWithSourceAndBytesRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bytes': value['bytes'],
        'format': value['format'],
    };
}
