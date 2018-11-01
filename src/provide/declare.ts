/**
 * @author WMXPY
 * @namespace Provides
 * @description Declare
 */

export interface ICommand {

    command: string;
    name: string;
    description: string;
    declare: COMMAND_DECLARE;
}

export enum COMMAND_DECLARE_TYPE {

    INPUT = 'INPUT',
    SCRIPT = 'SCRIPT',
    SELECT = 'SELECT',
}

export type COMMAND_DECLARE = {
    type: COMMAND_DECLARE_TYPE.INPUT;

    next: COMMAND_DECLARE;
} | {
    type: COMMAND_DECLARE_TYPE.SCRIPT;

    script: string;
} | {
    type: COMMAND_DECLARE_TYPE.SELECT;

    from: Array<{

        name: string;
        key: string;
        next: COMMAND_DECLARE;
    }>
};
