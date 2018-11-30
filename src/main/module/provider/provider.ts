/**
 * @author WMXPY
 * @namespace Main_Module_Provider
 * @description Provider
*/

import { ICommand } from "#P/declare";
import { MainProvider } from "#P/main/main";
import { readAllCommandsFromResource } from "#P/main/register";

export const bindingMainProvider = async (): Promise<void> => {

    const provider: MainProvider = MainProvider.instance;
    if (!provider.isEmpty()) {
        return;
    }

    const commands: ICommand[] = await readAllCommandsFromResource();

    commands.forEach((value: ICommand) => provider.register(value));

    provider.flush();
    return;
};
