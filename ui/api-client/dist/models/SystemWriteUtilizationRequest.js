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
exports.instanceOfSystemWriteUtilizationRequest = instanceOfSystemWriteUtilizationRequest;
exports.SystemWriteUtilizationRequestFromJSON = SystemWriteUtilizationRequestFromJSON;
exports.SystemWriteUtilizationRequestFromJSONTyped = SystemWriteUtilizationRequestFromJSONTyped;
exports.SystemWriteUtilizationRequestToJSON = SystemWriteUtilizationRequestToJSON;
exports.SystemWriteUtilizationRequestToJSONTyped = SystemWriteUtilizationRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteUtilizationRequest interface.
 */
function instanceOfSystemWriteUtilizationRequest(value) {
    return true;
}
function SystemWriteUtilizationRequestFromJSON(json) {
    return SystemWriteUtilizationRequestFromJSONTyped(json, false);
}
function SystemWriteUtilizationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'message': json['message'] == null ? undefined : json['message'],
        'todayOnly': json['today_only'] == null ? undefined : json['today_only'],
    };
}
function SystemWriteUtilizationRequestToJSON(json) {
    return SystemWriteUtilizationRequestToJSONTyped(json, false);
}
function SystemWriteUtilizationRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'message': value['message'],
        'today_only': value['todayOnly'],
    };
}
