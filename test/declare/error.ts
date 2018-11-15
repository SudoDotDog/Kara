/**
 * @author WMXPY
 * @namespace Declare
 * @description Error
 */

import Connor from "connor";

export const UNIT_TEST_MODULE_NAME = 'Unit-Test';

export const registerUnitTestConnor = (): void => {
    Connor.dictionary(UNIT_TEST_MODULE_NAME, {
        1056: 'Unable to mock absent function: {}',
        1088: 'Cannot read called before restore',
        1089: 'Cannot replace mock function after restore',
    });
};

export enum UNIT_TEST_ERROR_CODE {
    UNABLE_TO_MOCK_ABSENT_FUNCTION = 1056,
    CANNOT_READ_CALLED_BEFORE_RESTORE = 1088,
    CANNOT_REPLACE_AFTER_RESTORE = 1089,
}
