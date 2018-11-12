/**
 * @author WMXPY
 * @namespace Mock
 * @description Electron
 */

import { Construable } from "../construable";

/* tslint:disable:max-classes-per-file */

// tslint:disable-next-line
export class ipcMain extends Construable {

    public static on(channel: string, ...args: any) {

        this._called.push(['on', channel, ...args]);
    }
}

// tslint:disable-next-line
export class ipcRenderer extends Construable {

    public static on(channel: string, ...args: any[]) {

        this._called.push(['on', channel, ...args]);
    }

    public static send(channel: string, ...args: any[]) {

        this._called.push(['send', channel, ...args]);
    }
}


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
