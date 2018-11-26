/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Execute Test
 */

import { Execute } from '#M/scene/execute/execute';
import { expect } from 'chai';
import * as Chance from 'chance';
import { BrowserWindow, Menu } from '../../../mock/global/electron';

describe('Given an {Execute} scene class', (): void => {

    const chance: Chance.Chance = new Chance('main-scene-execute-execute');

    afterEach((): void => {

        (Execute as any)._instance = null;
        BrowserWindow.clear();
        Menu.clear();
    });

    it('should be able to construct instance', (): void => {

        const instance: Execute = Execute.createInstance();

        // tslint:disable-next-line
        expect(instance).to.be.exist;
    });

    it('should be able to create instance', (): void => {

        const instance: Execute = Execute.createInstance();
        instance.create();

        expect(BrowserWindow.instances).to.be.lengthOf(1);
        expect(BrowserWindow.instances[0].called).to.be.lengthOf(2);
    });
});
