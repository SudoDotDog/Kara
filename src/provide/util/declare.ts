/**
 * @author WMXPY
 * @namespace Provides_Util
 * @description Declare
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE } from "#P/declare";

export const createCommandCommandDeclare = (): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.COMMAND,
});

export const createDoneCommandDeclare = (): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.DONE,
});

export const createErrorCommandDeclare = (): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.ERROR,
});
