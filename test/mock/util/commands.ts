/**
 * @author WMXPY
 * @namespace Mock_Util
 * @description Commands
 */

import { COMMAND_DECLARE } from "#P/declare";

export const createMockedCommandDeclare = (args: {
    [key: string]: string;
} = {}): COMMAND_DECLARE => ({
    ...{
        type: 'MOCKED' as any,
        arguments: args,
    },
});
