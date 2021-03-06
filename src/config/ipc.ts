/**
 * @author WMXPY
 * @namespace Config
 * @fileoverview IPC
 */

export enum SCENE_EXECUTE_IPC {

    EXTEND_HEIGHT = 'main-execute-extend-height',
    REDUCE_HEIGHT = 'main-execute-reduce-height',
    HIDE_WINDOW = 'main-execute-hide-window',
}

export enum PROVIDER_IPC {

    CHECKSUM = 'provider-renderer-checksum',
    REQUEST_REPLACE = 'provider-main-request-replace',
    REQUEST_REPLACE_RESPONSE = 'provider-main-request-replace-response',
    REQUEST_UPDATE = 'provider-main-request-update',
    REQUEST_UPDATE_RESPONSE = 'provider-main-request-update-response',
}
