/**
 * @author WMXPY
 * @namespace Provider_Util
 * @description Arguments Test
 */

import { COMMAND_DECLARE } from '#P/declare';
import { extendThroughArguments, passThroughArguments } from '#P/util/arguments';
import { expect } from 'chai';
import * as Chance from 'chance';
import { createMockedCommandDeclare } from '../../mock/util/commands';

describe('Given [Arguments] help methods', (): void => {

    const chance: Chance.Chance = new Chance('provider-util-arguments');

    it('should be able to pass through no arguments', (): void => {

        const current: COMMAND_DECLARE = createMockedCommandDeclare();
        const next: COMMAND_DECLARE = createMockedCommandDeclare();
        const result: COMMAND_DECLARE = passThroughArguments(current, next);

        expect(result).to.be.deep.equal(next);
    });

    it('should be able to pass through with arguments', (): void => {

        const argumentKey: string = chance.string();
        const argumentValue: string = chance.string();

        const current: COMMAND_DECLARE = createMockedCommandDeclare({
            [argumentKey]: argumentValue,
        });
        const next: COMMAND_DECLARE = createMockedCommandDeclare();
        const result: COMMAND_DECLARE = passThroughArguments(current, next);

        expect(result).to.be.deep.equal({
            ...next,
            arguments: {
                [argumentKey]: argumentValue,
            },
        });
    });

    it('should be able to extend through no arguments', (): void => {

        const extendThroughKey: string = chance.string();
        const extendThroughValue: string = chance.string();

        const current: COMMAND_DECLARE = createMockedCommandDeclare();
        const next: COMMAND_DECLARE = createMockedCommandDeclare();
        const result: COMMAND_DECLARE = extendThroughArguments(current, next, {
            [extendThroughKey]: extendThroughValue,
        });

        expect(result).to.be.deep.equal({
            ...next,
            arguments: {
                [extendThroughKey]: extendThroughValue,
            },
        });
    });

    it('should be able to pass through with arguments', (): void => {

        const argumentKey: string = chance.string();
        const argumentValue: string = chance.string();

        const extendThroughKey: string = chance.string();
        const extendThroughValue: string = chance.string();

        const current: COMMAND_DECLARE = createMockedCommandDeclare({
            [argumentKey]: argumentValue,
        });
        const next: COMMAND_DECLARE = createMockedCommandDeclare();
        const result: COMMAND_DECLARE = extendThroughArguments(current, next, {
            [extendThroughKey]: extendThroughValue,
        });

        expect(result).to.be.deep.equal({
            ...next,
            arguments: {
                [argumentKey]: argumentValue,
                [extendThroughKey]: extendThroughValue,
            },
        });
    });
});
