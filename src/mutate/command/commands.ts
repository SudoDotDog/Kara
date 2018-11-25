/**
 * @author WMXPY
 * @namespace Mutate_Command
 * @description Commands
 */

import { COMMAND_DECLARE, ICommand } from "#P/declare";
import { Provider } from "#P/renderer";
import { MutatedCommandSideEffectFunction } from "#U/declare";
import { createDefaultCommandMutateFunction } from "#U/util/default";

export const mutateCommandCommand = (previous: COMMAND_DECLARE, input: string, provider: Provider = Provider.instance): MutatedCommandSideEffectFunction => {

    const matched: ICommand | null = provider.match(input);

    if (matched) {

        return async () => {

            const next: COMMAND_DECLARE = await provider.execute(matched.declare);
            return next;
        };
    }

    return createDefaultCommandMutateFunction(previous);
};
