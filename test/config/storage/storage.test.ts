/**
 * @author WMXPY
 * @namespace Config_Storage
 * @description Test Storage
 */

import { StorageFile } from '#C/storage/file';
import { Storage } from '#C/storage/storage';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given a {Storage} class', (): void => {

    const chance: Chance.Chance = new Chance('config-storage-storage');

    it('should be able to get instance', async (): Promise<void> => {

        const storage: Storage = Storage.instance;

        expect(storage).to.be.instanceOf(Storage);
    });

    it('should be able to get resource with mkdir', async (): Promise<void> => {

        const filename: string = chance.string();
        const storage: Storage = Storage.instance;
        const resource: StorageFile<any> = storage.resource(filename);

        expect(resource).to.be.instanceOf(StorageFile);
    });
});
