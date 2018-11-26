/**
 * @author WMXPY
 * @namespace Mutate
 * @description Declare
 */

import { COMMAND_DECLARE } from "#P/declare";

export enum MUTATE_SIGNAL {

    CLEAR_INPUT = 'CLEAR_INPUT',
    SET_COMMAND = 'SET_COMMAND',
}

export interface IMutateCommandResult {

    func: MutatedCommandSideEffectFunction;
    actions: MUTATE_ACTION[];
}

export type MutatedCommandSideEffectFunction = () => Promise<COMMAND_DECLARE>;
export type ImmediateCommandSideEffectFunction = () => Promise<COMMAND_DECLARE>;

export type MUTATE_ACTION
    = IMutateActionClearInput
    | IMutateActionSetCommand;

export interface IMutateActionClearInput {

    type: MUTATE_SIGNAL.CLEAR_INPUT;
}

export interface IMutateActionSetCommand {

    type: MUTATE_SIGNAL.SET_COMMAND;
    command: string;
}
