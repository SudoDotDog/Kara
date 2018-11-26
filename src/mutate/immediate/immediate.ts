/**
 * @author WMXPY
 * @namespace Mutate_Immediate
 * @description Immediate
 */

import { ICommandDeclareScript } from "#P/declare";
import { executeScript } from "#P/module/marked";
import { passThroughArguments } from "#P/util/arguments";
import { createErrorCommandDeclare } from "#P/util/declare";
import { ImmediateCommandSideEffectFunction } from "#U/declare";
import { END_SIGNAL, MarkedResult } from "@sudoo/marked";

export const mutateImmediateScript = (current: ICommandDeclareScript): ImmediateCommandSideEffectFunction => async () => {

    const result: MarkedResult = await executeScript(current.script, current.arguments);

    if (result.signal === END_SIGNAL.SUCCEED) {

        return passThroughArguments(current, current.next);
    }

    return passThroughArguments(current, createErrorCommandDeclare());
};
