/**
 * @author WMXPY
 * @namespace Config_Storage
 * @description Test Storage
 */

import { Storage } from '#C/storage/storage';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given a {Storage} class', (): void => {

    const chance: Chance.Chance = new Chance('config-storage-storage');

    it('should be able to get instance', async (): Promise<void> => {

        const storage: Storage = Storage.instance;

        expect(storage).to.be.instanceOf(Storage);
    });
});
