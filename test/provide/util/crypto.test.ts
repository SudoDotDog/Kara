/**
 * @author WMXPY
 * @namespace Provider_Util
 * @description Crypto Test
 */

import { compareMd5Context, md5Encode } from '#P/util/crypto';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given [Crypto] help methods', (): void => {

    const chance: Chance.Chance = new Chance('provider-util-crypto');

    const text: string = chance.string();
    const encoded: string = md5Encode(text);

    it('should be able to encode md5', (): void => {

        expect(md5Encode(text)).to.be.equal(encoded);
    });

    it('should be able to compare md5', (): void => {

        // tslint:disable-next-line
        expect(compareMd5Context(encoded, text)).to.be.true;
    });
});
