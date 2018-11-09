/**
 * @author WMXPY
 * @namespace Tray
 * @description Tray Test
 */

import { KaraTray } from '#M/module/tray/tray';
import { expect } from 'chai';
import * as Chance from 'chance';
import { getMockedElectronTrays, Menu, Tray } from '../../mock/global/electron';

describe('Given a {Tray} class', (): void => {

    const chance: Chance.Chance = new Chance('main-tray');

    afterEach((): void => {

        Tray.clear();
        Menu.clear();
    });

    it('should be able to create tray', (): void => {

        KaraTray.createInstance();

        expect(getMockedElectronTrays()[0].called).to.be.lengthOf(2);
        expect(Menu.staticCalled).to.be.lengthOf(1);
    });
});
