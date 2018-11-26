/**
 * @author WMXPY
 * @namespace Script_Util
 * @description Version
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { IPackageVersion, writeVersion } from '../../../script/util/version';

describe('Given [Version] help methods', (): void => {

    const chance: Chance.Chance = new Chance('script-util-version');

    it('should be able to write version', async (): Promise<void> => {

        const major: number = chance.natural();
        const minor: number = chance.natural();
        const fix: number = chance.natural();

        const version: IPackageVersion = {
            major,
            minor,
            fix,
        };

        const result = writeVersion(version);

        expect(result).to.be.equal(`${major}.${minor}.${fix}`);
    });
});
