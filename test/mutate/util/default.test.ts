/**
 * @author WMXPY
 * @namespace Mutate_Util
 * @description Default Test
 */

import { COMMAND_DECLARE } from '#P/declare';
import { MutatedCommandSideEffectFunction } from '#U/declare';
import { createDefaultCommandMutateFunction } from '#U/util/default';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given [Default] help methods', (): void => {

    const chance: Chance.Chance = new Chance('mutate-util-default');

    it('should be able to create default command side effect function', async (): Promise<void> => {

        const type: string = chance.string();

        const func: MutatedCommandSideEffectFunction = createDefaultCommandMutateFunction({
            type: type as any,
        });
        const result: COMMAND_DECLARE = await func();

        expect(result.type).to.be.equal(type);
    });
});
