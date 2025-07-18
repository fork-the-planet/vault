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
exports.instanceOfPkiIssuerReadCrlDeltaPemResponse = instanceOfPkiIssuerReadCrlDeltaPemResponse;
exports.PkiIssuerReadCrlDeltaPemResponseFromJSON = PkiIssuerReadCrlDeltaPemResponseFromJSON;
exports.PkiIssuerReadCrlDeltaPemResponseFromJSONTyped = PkiIssuerReadCrlDeltaPemResponseFromJSONTyped;
exports.PkiIssuerReadCrlDeltaPemResponseToJSON = PkiIssuerReadCrlDeltaPemResponseToJSON;
exports.PkiIssuerReadCrlDeltaPemResponseToJSONTyped = PkiIssuerReadCrlDeltaPemResponseToJSONTyped;
/**
 * Check if a given object implements the PkiIssuerReadCrlDeltaPemResponse interface.
 */
function instanceOfPkiIssuerReadCrlDeltaPemResponse(value) {
    return true;
}
function PkiIssuerReadCrlDeltaPemResponseFromJSON(json) {
    return PkiIssuerReadCrlDeltaPemResponseFromJSONTyped(json, false);
}
function PkiIssuerReadCrlDeltaPemResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'crl': json['crl'] == null ? undefined : json['crl'],
    };
}
function PkiIssuerReadCrlDeltaPemResponseToJSON(json) {
    return PkiIssuerReadCrlDeltaPemResponseToJSONTyped(json, false);
}
function PkiIssuerReadCrlDeltaPemResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'crl': value['crl'],
    };
}
