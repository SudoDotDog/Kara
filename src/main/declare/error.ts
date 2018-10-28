/**
 * @author WMXPY
 * @namespace Declare
 * @description Error
 */

import Connor from "connor";

export const MODULE_NAME = 'Kara-Main';

export const registerConnor = (): void => {
    Connor.dictionary(MODULE_NAME, {
        1515: 'Scene {}: window not found',
    });
};

export enum ERROR_CODE {
    WINDOW_NOT_FOUND = 1515,
}
