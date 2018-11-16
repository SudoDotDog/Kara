/**
 * @author WMXPY
 * @namespace Config_Storage
 * @description Test Storage
 */

import { StorageFile } from '#C/storage/file';
import { Storage } from '#C/storage/storage';
import { expect } from 'chai';
import * as Chance from 'chance';
import * as Fs from 'fs';
import { Restorable } from '../../mock/restorable';

describe('Given a {Storage} class', (): void => {

    const chance: Chance.Chance = new Chance('config-storage-storage');

    it('should be able to get instance', async (): Promise<void> => {

        const storage: Storage = Storage.instance;

        expect(storage).to.be.instanceOf(Storage);
    });

    it('should be able to get resource with exist', async (): Promise<void> => {

        const filename: string = chance.string();

        const mockFsExistSync: Restorable = Restorable.mock(Fs, 'existsSync').thenReturn(true);

        const storage: Storage = Storage.instance;
        const resource: StorageFile<any> = storage.resource(filename);

        mockFsExistSync.restore();

        expect(mockFsExistSync.called()).to.be.lengthOf(1);
        expect(resource).to.be.instanceOf(StorageFile);
    });

    it('should be able to get resource with exist and mkdir', async (): Promise<void> => {

        const filename: string = chance.string();

        const mockFsExistSync: Restorable = Restorable.mock(Fs, 'existsSync').thenReturn(false);
        const mockFsMkdirSync: Restorable = Restorable.mock(Fs, 'mkdirSync');

        const storage: Storage = Storage.instance;
        const resource: StorageFile<any> = storage.resource(filename);

        mockFsExistSync.restore();
        mockFsMkdirSync.restore();

        expect(mockFsExistSync.called()).to.be.lengthOf(1);
        expect(mockFsMkdirSync.called()).to.be.lengthOf(1);
        expect(resource).to.be.instanceOf(StorageFile);
    });
});
