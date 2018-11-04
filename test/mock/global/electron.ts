/**
 * @author WMXPY
 * @namespace Mock
 * @description Electron
 */

import { Construable } from "../construable";

/* tslint:disable:max-classes-per-file */
export class Menu extends Construable {

    public static buildFromTemplate(template: any) {

        this._called.push(['buildFromTemplate', template]);
    }
}

export class Tray extends Construable {

    public setContextMenu(template: any) {

        this._called.push(['setContextMenu', template]);
    }

    public setToolTip(tooltip: string) {

        this._called.push(['setToolTip', tooltip]);
    }
}

export const getMockedElectronTrays = (): Tray[] => {
    return Tray.instances;
};

export const getMockedElectronMenus = (): Menu[] => {
    return Menu.instances;
};
