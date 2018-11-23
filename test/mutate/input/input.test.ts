/**
 * @author WMXPY
 * @namespace Mutate_Input
 * @description Input Test
 */

import { mutateInputCommand } from '#U/input/inputs';
import { expect } from 'chai';
import * as Chance from 'chance';
import { MockProvider } from '../../mock/clazz/provider';

describe('Given [Mutate-Input] help methods', (): void => {

    const chance: Chance.Chance = new Chance('mutate-input');

    it('should be able to mutate input - not matched', (): void => {

        const mockProvider: MockProvider = new MockProvider();
        const input: string = chance.string();

        const mutated = mutateInputCommand(input, mockProvider as any);
        expect(mutated).to.be.equal(input);
    });

    it('should be able to mutate input - matched', (): void => {

        const mockProvider: MockProvider = new MockProvider();
        const input: string = chance.string();
        const newInput: string = chance.string();
        mockProvider.when('nearest', {
            command: newInput,
        });

        const mutated = mutateInputCommand(input, mockProvider as any);
        expect(mutated).to.be.equal(newInput);
    });
});
