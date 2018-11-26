/**
 * @author WMXPY
 * @namespace Mutate_Command
 * @description Commands Test
 */

import { COMMAND_DECLARE } from '#P/declare';
import { mutateCommandCommand } from '#U/command/commands';
import { MutatedCommandSideEffectFunction } from '#U/declare';
import { expect } from 'chai';
import * as Chance from 'chance';
import { MockProvider } from '../../mock/clazz/provider';

describe('Given [Mutate-Commands] help methods', (): void => {

    const chance: Chance.Chance = new Chance('mutate-command-commands');

    const createMockCommandDeclare = (type: string = chance.string()): any => ({
        type,
    });

    it('should be able to mutate command - not matched', async (): Promise<void> => {

        const mockProvider: MockProvider = new MockProvider();
        const input: string = chance.string();
        const type: string = chance.string();

        const mutated: MutatedCommandSideEffectFunction =
            mutateCommandCommand(createMockCommandDeclare(type), input, mockProvider as any);

        const result: COMMAND_DECLARE = await mutated();
        expect(result.type).to.be.equal(type);
    });

    it('should be able to mutate command - matched', async (): Promise<void> => {

        const mockProvider: MockProvider = new MockProvider();
        const input: string = chance.string();
        const type: string = chance.string();
        const newType: string = chance.string();
        const newInput: string = chance.string();

        mockProvider.when('match', {

            command: newInput,
            declare: createMockCommandDeclare(newType),
        });

        const mutated: MutatedCommandSideEffectFunction =
            mutateCommandCommand(createMockCommandDeclare(type), input, mockProvider as any);

        const result: COMMAND_DECLARE = await mutated();
        expect(result.type).to.be.equal(newType);
    });
});
