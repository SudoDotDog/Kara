/**
 * @author WMXPY
 * @namespace Provides_Main
 * @description Register
 */

import { StorageFile } from "#C/storage/file";
import { Storage } from "#C/storage/storage";
import { ICommand } from "#P/declare";

export const readAllCommandsFromResource = async (): Promise<ICommand[]> => {

    const providerResource: StorageFile<ICommand[]> = Storage.instance.resource('Provider');
    await providerResource.initialize([]);

    const commands: ICommand[] = await providerResource.get();

    return commands;
};

export const updateAllCommandsToResource = async (commands: ICommand[]): Promise<ICommand[]> => {

    const providerResource: StorageFile<ICommand[]> = Storage.instance.resource('Provider');
    await providerResource.initialize([]);

    await providerResource.put(commands);

    return commands;
};
