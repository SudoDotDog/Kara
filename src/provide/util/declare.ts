/**
 * @author WMXPY
 * @namespace Provides_Util
 * @description Declare
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE, ICommandDeclareSelectElement } from "#P/declare";

export const createCommandCommandDeclare = (): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.COMMAND,
});

export const createDoneCommandDeclare = (): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.DONE,
});

export const createErrorCommandDeclare = (): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.ERROR,
});

export const createInputCommandDeclare = (next: COMMAND_DECLARE, variable: string): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.INPUT,

    variable,

    next,
});

export const createScriptCommandDeclare = (script: string, next: COMMAND_DECLARE): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.SCRIPT,

    script,
    next,
});

export const createSelectCommandDeclare = (from: ICommandDeclareSelectElement[]): COMMAND_DECLARE => ({

    type: COMMAND_DECLARE_TYPE.SELECT,

    from,
});
