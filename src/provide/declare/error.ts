/**
 * @author WMXPY
 * @namespace Provides_Declare
 * @description Error
 */

import Connor from 'connor';

export const PROVIDE_MODULE_NAME: string = 'provide';
export enum PROVIDE_ERROR_CODE {

    PROVIDE_IS_EMPTY = 4012,
}

export const initProvideErrorDictionary = () => {

    Connor.dictionary(PROVIDE_MODULE_NAME, {

        [PROVIDE_ERROR_CODE.PROVIDE_IS_EMPTY]: 'Provide is empty',
    });
};
