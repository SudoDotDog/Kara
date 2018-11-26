/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Window Setting Test
 */

import { getExecuteWindowSetting } from '#M/scene/execute/window-setting';
import { expect } from 'chai';
import * as Chance from 'chance';
import { BrowserWindowConstructorOptions } from 'electron';

describe('Given [Window Setting] help methods', (): void => {

    const chance: Chance.Chance = new Chance('main-scene-execute-window_setting');

    it('should be able to create setting', (): void => {

        const setting: BrowserWindowConstructorOptions = getExecuteWindowSetting();

        // tslint:disable-next-line
        expect(setting).to.be.exist;
    });

    it('should be able to get correct setting', (): void => {

        const setting: BrowserWindowConstructorOptions = getExecuteWindowSetting();

        // tslint:disable-next-line
        expect(setting.frame).to.be.false;
    });
});
