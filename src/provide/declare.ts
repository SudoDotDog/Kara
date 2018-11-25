/**
 * @author WMXPY
 * @namespace Provides
 * @description Declare
 */

export interface ICommand {

    command: string;
    description: string;
    declare: CommandDeclare;
    key: string;
    name: string;
}

export enum COMMAND_DECLARE_TYPE {

    COMMAND = 'COMMAND',
    DONE = 'DONE',
    ERROR = 'ERROR',
    INPUT = 'INPUT',
    SCRIPT = 'SCRIPT',
    SELECT = 'SELECT',
}

export type CommandDeclare
    = ICommandDeclareCommand
    | ICommandDeclareDone
    | ICommandDeclareError
    | ICommandDeclareInput
    | ICommandDeclareScript
    | ICommandDeclareSelect;

interface ICommandDeclareArguments {

    arguments?: {
        [key: string]: string;
    };
}

export interface ICommandDeclareCommand {

    type: COMMAND_DECLARE_TYPE.COMMAND;
}

export interface ICommandDeclareDone extends ICommandDeclareArguments {

    type: COMMAND_DECLARE_TYPE.DONE;
}

export interface ICommandDeclareError extends ICommandDeclareArguments {

    type: COMMAND_DECLARE_TYPE.ERROR;
}

export interface ICommandDeclareInput extends ICommandDeclareArguments {

    type: COMMAND_DECLARE_TYPE.INPUT;

    next: CommandDeclare;
}

export interface ICommandDeclareScript extends ICommandDeclareArguments {

    type: COMMAND_DECLARE_TYPE.SCRIPT;

    script: string;
    next: CommandDeclare;
}

export interface ICommandDeclareSelect extends ICommandDeclareArguments {

    type: COMMAND_DECLARE_TYPE.SELECT;

    from: ICommandDeclareSelectElement[];
}

export interface ICommandDeclareSelectElement {

    name: string;
    key: string;
    next: CommandDeclare;
}
