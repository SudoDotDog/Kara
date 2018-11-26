/**
 * @author WMXPY
 * @namespace Mutate_Command
 * @description Commands Test
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE, ICommandDeclareInput } from '#P/declare';
import { mutateCommandCommand, mutateCommandInput } from '#U/command/commands';
import { IMutateCommandResult, MUTATE_SIGNAL } from '#U/declare';
import { expect } from 'chai';
import * as Chance from 'chance';
import { MockProvider } from '../../mock/clazz/provider';

describe('Given [Mutate-Commands] help methods', (): void => {

    const chance: Chance.Chance = new Chance('mutate-command-commands');

    const createMockCommandDeclare = (type: string = chance.string()): any => ({
        type,
    });

    describe('Given [Mutate-Commands-Command] help method', (): void => {

        it('should be able to mutate command - not matched', async (): Promise<void> => {

            const mockProvider: MockProvider = new MockProvider();
            const input: string = chance.string();
            const type: string = chance.string();

            const mutated: IMutateCommandResult =
                mutateCommandCommand(createMockCommandDeclare(type), input, mockProvider as any);

            const result: COMMAND_DECLARE = await mutated.func();
            expect(result.type).to.be.equal(type);
            expect(mutated.actions).to.be.deep.equal([]);
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

            const mutated: IMutateCommandResult =
                mutateCommandCommand(createMockCommandDeclare(type), input, mockProvider as any);

            const result: COMMAND_DECLARE = await mutated.func();
            expect(result.type).to.be.equal(newType);
            expect(mutated.actions).to.be.deep.equal([
                { type: MUTATE_SIGNAL.CLEAR_INPUT },
                { type: MUTATE_SIGNAL.SET_COMMAND, command: newInput },
            ]);
        });
    });

    describe('Given [Mutate-Commands-Input] help method', (): void => {

        it('should be able to mutate input', async (): Promise<void> => {

            const input: string = chance.string();
            const newType: string = chance.string();

            const mockDeclare: ICommandDeclareInput = {
                type: COMMAND_DECLARE_TYPE.INPUT,
                next: createMockCommandDeclare(newType),
            };

            const mutated: IMutateCommandResult =
                mutateCommandInput(mockDeclare, input);

            const result: COMMAND_DECLARE = await mutated.func();
            expect(result.type).to.be.equal(newType);
            expect(mutated.actions).to.be.deep.equal([
                { type: MUTATE_SIGNAL.CLEAR_INPUT },
            ]);
        });
    });
});
