/**
 * @author WMXPY
 * @namespace Mutate_Command
 * @description Commands
 */

import { ICommand, ICommandDeclareCommand, ICommandDeclareInput } from "#P/declare";
import { Provider } from "#P/renderer";
import { extendThroughArguments } from "#P/util/arguments";
import { IMutateCommandResult, MUTATE_SIGNAL } from "#U/declare";
import { createDefaultCommandMutateFunction, createEmptySignalMutateResult } from "#U/util/default";

export const mutateCommandCommand = (previous: ICommandDeclareCommand, input: string, provider: Provider = Provider.instance): IMutateCommandResult => {

    const matched: ICommand | null = provider.match(input);

    if (matched) {

        return {

            func: async () => matched.declare,
            signals: [MUTATE_SIGNAL.CLEAR_INPUT],
        };
    }

    return createEmptySignalMutateResult(createDefaultCommandMutateFunction(previous));
};

export const mutateCommandInput = (previous: ICommandDeclareInput, input: string): IMutateCommandResult => ({
    func: async () => extendThroughArguments(previous, previous.next, {
        input,
    }),
    signals: [MUTATE_SIGNAL.CLEAR_INPUT],
});
