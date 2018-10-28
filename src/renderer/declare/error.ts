/**
 * @author WMXPY
 * @namespace Declare
 * @description Error
 */

import Connor from "connor";

export const EXECUTE_MODULE_NAME = 'Kara-Renderer-Execute';
export const SCEPTER_MODULE_NAME = 'Kara-Renderer-Scepter';

export const registerExecuteConnor = (): void => {
    Connor.dictionary(EXECUTE_MODULE_NAME, {
    });
};

export const registerScepterConnor = (): void => {
    Connor.dictionary(SCEPTER_MODULE_NAME, {
    });
};

export enum EXECUTE_ERROR_CODE {
}

export enum SCEPTER_ERROR_CODE {
}
