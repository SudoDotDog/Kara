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
    INPUT = 'INPUT',
    SCRIPT = 'SCRIPT',
    SELECT = 'SELECT',
}

export type COMMAND_DECLARE
    = ICommandDeclareCommand
    | ICommandDeclareInput
    | ICommandDeclareScript
    | ICommandDeclareSelect;

export interface ICommandDeclareCommand {

    type: COMMAND_DECLARE_TYPE.COMMAND;
}

export interface ICommandDeclareInput {

    type: COMMAND_DECLARE_TYPE.INPUT;

    next: COMMAND_DECLARE;
}

export interface ICommandDeclareScript {

    type: COMMAND_DECLARE_TYPE.SCRIPT;

    script: string;
}

export interface ICommandDeclareSelect {

    type: COMMAND_DECLARE_TYPE.SELECT;

    from: Array<{

        name: string;
        key: string;
        next: COMMAND_DECLARE;
    }>;
}
