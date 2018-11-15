/**
 * @author WMXPY
 * @namespace Config_Storage
 * @description Test File
 */

import { StorageFile } from '#C/storage/file';
import { expect } from 'chai';
import * as Chance from 'chance';
import * as Fs from 'fs';
import { Restorable } from '../../mock/restorable';

describe('Given a {StorageFile} class', (): void => {

    const chance: Chance.Chance = new Chance('config-storage-file');

    it('should be able to read file', async (): Promise<void> => {

        const expectedResult: string = chance.string();

        const mockedFsRead: Restorable = Restorable.mock(Fs, 'readFile').with((path: string, encode: string, func: (err: Error, data: string) => void) => func(undefined as any, JSON.stringify(expectedResult)));

        const fakePath: string = chance.string();
        const file: StorageFile<any> = StorageFile.fromPath(fakePath);

        const result = await file.get();

        mockedFsRead.restore();

        expect(result).to.be.equal(expectedResult);
        expect(mockedFsRead.called()).to.be.lengthOf(1);
    });
});
