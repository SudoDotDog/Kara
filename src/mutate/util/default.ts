/**
 * @author WMXPY
 * @namespace Mutate_Util
 * @description Default
 */

import { COMMAND_DECLARE } from "#P/declare";
import { IMutateCommandResult, MutatedCommandSideEffectFunction } from "#U/declare";

export const createDefaultCommandMutateFunction = (resolve: COMMAND_DECLARE): MutatedCommandSideEffectFunction => async () => resolve;
export const createEmptySignalMutateResult = (func: MutatedCommandSideEffectFunction): IMutateCommandResult => ({
    func,
    actions: [],
});
