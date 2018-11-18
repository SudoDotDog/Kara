/**
 * @author WMXPY
 * @namespace Provides
 * @description Declare
 */

export interface ICommand {

    command: string;
    description: string;
    declare: COMMAND_DECLARE;
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

export type COMMAND_DECLARE
    = ICommandDeclareCommand
    | ICommandDeclareDone
    | ICommandDeclareError
    | ICommandDeclareInput
    | ICommandDeclareScript
    | ICommandDeclareSelect;

export interface ICommandDeclareCommand {

    type: COMMAND_DECLARE_TYPE.COMMAND;
}

export interface ICommandDeclareDone {

    type: COMMAND_DECLARE_TYPE.DONE;
}

export interface ICommandDeclareError {

    type: COMMAND_DECLARE_TYPE.ERROR;
}

export interface ICommandDeclareInput {

    type: COMMAND_DECLARE_TYPE.INPUT;

    next: COMMAND_DECLARE;
}

export interface ICommandDeclareScript {

    type: COMMAND_DECLARE_TYPE.SCRIPT;

    script: string;
    next: COMMAND_DECLARE;
}

export interface ICommandDeclareSelect {

    type: COMMAND_DECLARE_TYPE.SELECT;

    from: Array<{

        name: string;
        key: string;
        next: COMMAND_DECLARE;
    }>;
}
