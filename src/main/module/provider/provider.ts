/**
 * @author WMXPY
 * @namespace Main_Module_Provider
 * @description Provider
*/

import { StorageFile } from "#C/storage/file";
import { Storage } from "#C/storage/storage";
import { ICommand } from "#P/declare";
import { MainProvider } from "#P/main";

export const bindingMainProvider = async (): Promise<void> => {

    const provider: MainProvider = MainProvider.instance;
    if (!provider.isEmpty()) {
        return;
    }

    const providerResource: StorageFile<ICommand[]> = Storage.instance.resource('Provider');
    await providerResource.initialize([]);
    const commands: ICommand[] = await providerResource.get();
    commands.forEach((value: ICommand) => provider.register(value));

    provider.flush();
    return;
};
