/**
 * @author WMXPY
 * @namespace Main_Module_Provider
 * @description Provider
*/

import { StorageFile } from "#C/storage/file";
import { Storage } from "#C/storage/storage";
import { ICommand } from "#P/declare";
import { MainProvider } from "#P/main";
import { initMainProvider } from "#P/module/init";

export const bindingMainProvider = (): void => {

    const providerResource: StorageFile<ICommand[]> = Storage.instance.resource('Provider');

    const provider: MainProvider = MainProvider.instance;
    if (!provider.isEmpty()) {
        return;
    }
    initMainProvider();
    return;
};
