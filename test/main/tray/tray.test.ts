/**
 * @author WMXPY
 * @namespace Tray
 * @description Tray Test
 */

import { KaraTray } from '#M/tray/tray';
import { expect } from 'chai';
import * as Chance from 'chance';
import * as Electron from 'electron';
import { Restorable } from '../../mock/restorable';

describe('Given a {Tray} class', (): void => {

    const chance: Chance.Chance = new Chance('main-tray');

    it('should be able to create tray', (): void => {

        const mockedMenu: Restorable = Restorable.mock(Electron, "Menu");
        const mockedTray: Restorable = Restorable.mock(Electron, "Tray");

        const tray: KaraTray = KaraTray.createInstance();

        expect(mockedTray.called()).to.be.deep.equal([]);
    });
});
