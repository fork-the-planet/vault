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
exports.instanceOfPkiTidyRequest = instanceOfPkiTidyRequest;
exports.PkiTidyRequestFromJSON = PkiTidyRequestFromJSON;
exports.PkiTidyRequestFromJSONTyped = PkiTidyRequestFromJSONTyped;
exports.PkiTidyRequestToJSON = PkiTidyRequestToJSON;
exports.PkiTidyRequestToJSONTyped = PkiTidyRequestToJSONTyped;
/**
 * Check if a given object implements the PkiTidyRequest interface.
 */
function instanceOfPkiTidyRequest(value) {
    return true;
}
function PkiTidyRequestFromJSON(json) {
    return PkiTidyRequestFromJSONTyped(json, false);
}
function PkiTidyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'acmeAccountSafetyBuffer': json['acme_account_safety_buffer'] == null ? undefined : json['acme_account_safety_buffer'],
        'issuerSafetyBuffer': json['issuer_safety_buffer'] == null ? undefined : json['issuer_safety_buffer'],
        'pauseDuration': json['pause_duration'] == null ? undefined : json['pause_duration'],
        'revocationQueueSafetyBuffer': json['revocation_queue_safety_buffer'] == null ? undefined : json['revocation_queue_safety_buffer'],
        'safetyBuffer': json['safety_buffer'] == null ? undefined : json['safety_buffer'],
        'tidyAcme': json['tidy_acme'] == null ? undefined : json['tidy_acme'],
        'tidyCertMetadata': json['tidy_cert_metadata'] == null ? undefined : json['tidy_cert_metadata'],
        'tidyCertStore': json['tidy_cert_store'] == null ? undefined : json['tidy_cert_store'],
        'tidyCmpv2NonceStore': json['tidy_cmpv2_nonce_store'] == null ? undefined : json['tidy_cmpv2_nonce_store'],
        'tidyCrossClusterRevokedCerts': json['tidy_cross_cluster_revoked_certs'] == null ? undefined : json['tidy_cross_cluster_revoked_certs'],
        'tidyExpiredIssuers': json['tidy_expired_issuers'] == null ? undefined : json['tidy_expired_issuers'],
        'tidyMoveLegacyCaBundle': json['tidy_move_legacy_ca_bundle'] == null ? undefined : json['tidy_move_legacy_ca_bundle'],
        'tidyRevocationList': json['tidy_revocation_list'] == null ? undefined : json['tidy_revocation_list'],
        'tidyRevocationQueue': json['tidy_revocation_queue'] == null ? undefined : json['tidy_revocation_queue'],
        'tidyRevokedCertIssuerAssociations': json['tidy_revoked_cert_issuer_associations'] == null ? undefined : json['tidy_revoked_cert_issuer_associations'],
        'tidyRevokedCerts': json['tidy_revoked_certs'] == null ? undefined : json['tidy_revoked_certs'],
    };
}
function PkiTidyRequestToJSON(json) {
    return PkiTidyRequestToJSONTyped(json, false);
}
function PkiTidyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'acme_account_safety_buffer': value['acmeAccountSafetyBuffer'],
        'issuer_safety_buffer': value['issuerSafetyBuffer'],
        'pause_duration': value['pauseDuration'],
        'revocation_queue_safety_buffer': value['revocationQueueSafetyBuffer'],
        'safety_buffer': value['safetyBuffer'],
        'tidy_acme': value['tidyAcme'],
        'tidy_cert_metadata': value['tidyCertMetadata'],
        'tidy_cert_store': value['tidyCertStore'],
        'tidy_cmpv2_nonce_store': value['tidyCmpv2NonceStore'],
        'tidy_cross_cluster_revoked_certs': value['tidyCrossClusterRevokedCerts'],
        'tidy_expired_issuers': value['tidyExpiredIssuers'],
        'tidy_move_legacy_ca_bundle': value['tidyMoveLegacyCaBundle'],
        'tidy_revocation_list': value['tidyRevocationList'],
        'tidy_revocation_queue': value['tidyRevocationQueue'],
        'tidy_revoked_cert_issuer_associations': value['tidyRevokedCertIssuerAssociations'],
        'tidy_revoked_certs': value['tidyRevokedCerts'],
    };
}
