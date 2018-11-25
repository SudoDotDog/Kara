/**
 * @author WMXPY
 * @namespace Mutate_Input
 * @description Inputs
 */

import { ICommand } from "#P/declare";
import { Provider } from "#P/renderer";

export const mutateInputCommand = (input: string, provider: Provider = Provider.instance): string => {

    const nearest: ICommand | null = provider.nearest(input);
    if (nearest) {
        return nearest.command;
    }
    return input;
};
