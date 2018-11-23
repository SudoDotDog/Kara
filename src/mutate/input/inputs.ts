/**
 * @author WMXPY
 * @namespace Mutate_Input
 * @description Command
 */

import { ICommand } from "#P/declare";
import { Provider } from "#P/renderer";

export const mutateInputCommand = (input: string): string => {

    const provider: Provider = Provider.instance;
    const nearest: ICommand | null = provider.nearest(input);

    if (nearest) {
        return nearest.command;
    }
    return input;
};
