/**
 * @author WMXPY
 * @namespace Config
 * @fileoverview IPC
 */

export enum SCENE_EXECUTE_IPC {

    EXTEND_HEIGHT = 'main-execute-extend-height',
    REDUCE_HEIGHT = 'main-execute-reduce-height',
}

export enum PROVIDER_IPC {

    CHECKSUM = 'provider-renderer-checksum',
    REQUEST_UPDATE = 'provider-main-request-update',
    REQUEST_UPDATE_RESPONSE = 'provider-main-request-update-response',
}
