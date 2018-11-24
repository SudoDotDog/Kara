/**
 * @author WMXPY
 * @namespace Renderer_Relative
 * @description Relative Test
 */

import { COMMAND_DECLARE_TYPE } from '#P/declare';
import { createCommandCommandDeclare } from '#P/util/declare';
import { CommandDeclareTooltip } from '#R^relative/panel/command';
import { Relative } from '#R^relative/relative';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given a {Relative} class', (): void => {

    const chance: Chance.Chance = new Chance('renderer-relative-relative');

    it('should be able to construct', (): void => {

        const relative: Relative = Relative.declare(createCommandCommandDeclare());

        // tslint:disable-next-line
        expect(relative).to.be.exist;
    });

    it('should be able to get command declare type', (): void => {

        const relative: Relative = Relative.declare(createCommandCommandDeclare());

        expect(relative.type).to.be.equal(COMMAND_DECLARE_TYPE.COMMAND);
    });

    it('should be able to render tooltip', (): void => {

        const relative: Relative = Relative.declare(createCommandCommandDeclare());

        expect(relative.toolTip()).to.be.equal(CommandDeclareTooltip);
    });
});
