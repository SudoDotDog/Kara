/**
 * @author WMXPY
 * @namespace Mutate
 * @description Declare
 */

import { COMMAND_DECLARE } from "#P/declare";

export enum MUTATE_SIGNAL {

    CLEAR_INPUT = 'CLEAR_INPUT',
}

export interface IMutateCommandResult {

    func: MutatedCommandSideEffectFunction;
    signals: MUTATE_SIGNAL[];
}

export type MutatedCommandSideEffectFunction = () => Promise<COMMAND_DECLARE>;
export type ImmediateCommandSideEffectFunction = () => Promise<COMMAND_DECLARE>;
