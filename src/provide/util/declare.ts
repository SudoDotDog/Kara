/**
 * @author WMXPY
 * @namespace Provides_Util
 * @description Declare
 */

import { CommandDeclare, COMMAND_DECLARE_TYPE, ICommandDeclareSelectElement } from "#P/declare";

export const createCommandCommandDeclare = (): CommandDeclare => ({

    type: COMMAND_DECLARE_TYPE.COMMAND,
});

export const createDoneCommandDeclare = (): CommandDeclare => ({

    type: COMMAND_DECLARE_TYPE.DONE,
});

export const createErrorCommandDeclare = (): CommandDeclare => ({

    type: COMMAND_DECLARE_TYPE.ERROR,
});

export const createInputCommandDeclare = (next: CommandDeclare): CommandDeclare => ({

    type: COMMAND_DECLARE_TYPE.INPUT,

    next,
});

export const createScriptCommandDeclare = (script: string, next: CommandDeclare): CommandDeclare => ({

    type: COMMAND_DECLARE_TYPE.SCRIPT,

    script,
    next,
});

export const createSelectCommandDeclare = (from: ICommandDeclareSelectElement[]): CommandDeclare => ({

    type: COMMAND_DECLARE_TYPE.SELECT,

    from,
});
