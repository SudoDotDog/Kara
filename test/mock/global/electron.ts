/**
 * @author WMXPY
 * @namespace Mock
 * @description Electron
 */

import * as Chance from 'chance';
import { Construable } from "../construable";

/* tslint:disable:max-classes-per-file */

const chance = new Chance('mock-global-electron');

// tslint:disable-next-line
export class app extends Construable {

    public static getPath(): string {

        return chance.string();
    }

    public constructor(...args: any[]) {

        super(...args);
        app.instances.push(this);
    }
}

export class BrowserWindow extends Construable {

    public constructor(...args: any[]) {

        super(...args);
        BrowserWindow.instances.push(this);
    }

    public on(event: string, func: any) {

        this._called.push(['on', event, func]);
    }

    public loadURL(path: string): void {

        this._called.push(['loadURL', path]);
    }
}

// tslint:disable-next-line
export class remote extends Construable {

    public static get app(): typeof app {

        return app;
    }

    public constructor(...args: any[]) {

        super(...args);
        remote.instances.push(this);
    }
}

// tslint:disable-next-line
export class ipcMain extends Construable {

    public static on(channel: string, ...args: any) {

        this._called.push(['on', channel, ...args]);
    }

    public constructor(...args: any[]) {

        super(...args);
        ipcMain.instances.push(this);
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

    public constructor(...args: any[]) {

        super(...args);
        ipcRenderer.instances.push(this);
    }
}


export class Menu extends Construable {

    public static buildFromTemplate(template: any) {

        this._called.push(['buildFromTemplate', template]);
    }

    public constructor(...args: any[]) {

        super(...args);
        Menu.instances.push(this);
    }
}

export class Tray extends Construable {

    public constructor(...args: any[]) {

        super(...args);
        Tray.instances.push(this);
    }

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
