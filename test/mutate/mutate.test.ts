/**
 * @author WMXPY
 * @namespace Mutate
 * @description Mutate Test
 */

import { createCommandCommandDeclare } from '#P/util/declare';
import { Mutate } from '#U/mutate';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given {Mutate} class', (): void => {

    const chance: Chance.Chance = new Chance('mutate-mutate');

    it('should be able to construct', (): void => {

        const mutate: Mutate = Mutate.declare(createCommandCommandDeclare());

        // tslint:disable-next-line
        expect(mutate).to.be.exist;
    });
});
