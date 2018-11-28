/**
 * @author WMXPY
 * @namespace Scene_Center_Action
 * @description Resource
 */

import { StorageFile } from "#C/storage/file";
import { Storage } from "#C/storage/storage";
import { ICommand } from "#P/declare";

export const readProviderResource = async (): Promise<ICommand[]> => {

    const providerResource: StorageFile<ICommand[]> = Storage.instance.resource('Provider');
    const commands: ICommand[] = await providerResource.get();
    return commands;
};

export const writeProviderResource = async (commands: ICommand[]): Promise<boolean> => {

    const providerResource: StorageFile<ICommand[]> = Storage.instance.resource('Provider');
    const result: boolean = await providerResource.put(commands);
    return result;
};
