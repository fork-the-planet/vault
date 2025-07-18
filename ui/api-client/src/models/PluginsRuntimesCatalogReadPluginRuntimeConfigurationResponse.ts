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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
 */
export interface PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse {
    /**
     * Parent cgroup to set for each container. This can be used to control the total resource usage for a group of plugins.
     * @type {string}
     * @memberof PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
     */
    cgroupParent?: string;
    /**
     * CPU limit to set per container in nanos. Defaults to no limit.
     * @type {number}
     * @memberof PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
     */
    cpuNanos?: number;
    /**
     * Memory limit to set per container in bytes. Defaults to no limit.
     * @type {number}
     * @memberof PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
     */
    memoryBytes?: number;
    /**
     * The name of the plugin runtime
     * @type {string}
     * @memberof PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
     */
    name?: string;
    /**
     * The OCI-compatible runtime (default "runsc")
     * @type {string}
     * @memberof PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
     */
    ociRuntime?: string;
    /**
     * Whether the container runtime is run as a non-privileged (non-root) user.
     * @type {boolean}
     * @memberof PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
     */
    rootless?: boolean;
    /**
     * The type of the plugin runtime
     * @type {string}
     * @memberof PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
     */
    type?: string;
}

/**
 * Check if a given object implements the PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse interface.
 */
export function instanceOfPluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse(value: object): value is PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse {
    return true;
}

export function PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponseFromJSON(json: any): PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse {
    return PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponseFromJSONTyped(json, false);
}

export function PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'cgroupParent': json['cgroup_parent'] == null ? undefined : json['cgroup_parent'],
        'cpuNanos': json['cpu_nanos'] == null ? undefined : json['cpu_nanos'],
        'memoryBytes': json['memory_bytes'] == null ? undefined : json['memory_bytes'],
        'name': json['name'] == null ? undefined : json['name'],
        'ociRuntime': json['oci_runtime'] == null ? undefined : json['oci_runtime'],
        'rootless': json['rootless'] == null ? undefined : json['rootless'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponseToJSON(json: any): PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse {
    return PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponseToJSONTyped(json, false);
}

export function PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponseToJSONTyped(value?: PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cgroup_parent': value['cgroupParent'],
        'cpu_nanos': value['cpuNanos'],
        'memory_bytes': value['memoryBytes'],
        'name': value['name'],
        'oci_runtime': value['ociRuntime'],
        'rootless': value['rootless'],
        'type': value['type'],
    };
}

