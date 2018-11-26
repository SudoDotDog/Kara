/**
 * @author WMXPY
 * @namespace Mutate_Command
 * @description Commands
 */

import { COMMAND_DECLARE, ICommand, ICommandDeclareCommand, ICommandDeclareInput } from "#P/declare";
import { Provider } from "#P/renderer";
import { extendThroughArguments } from "#P/util/arguments";
import { MutatedCommandSideEffectFunction } from "#U/declare";
import { createDefaultCommandMutateFunction } from "#U/util/default";

export const mutateCommandCommand = (previous: ICommandDeclareCommand, input: string, provider: Provider = Provider.instance): MutatedCommandSideEffectFunction => {

    const matched: ICommand | null = provider.match(input);

    if (matched) {

        return async () => matched.declare;
    }

    return createDefaultCommandMutateFunction(previous);
};

export const mutateCommandInput = (previous: ICommandDeclareInput, input: string): MutatedCommandSideEffectFunction =>
    async () => extendThroughArguments(previous, previous.next, {
        input,
    });
