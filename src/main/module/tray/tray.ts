/**
 * @author WMXPY
 * @namespace Main_Module_Tray
 * @description Tray
 */

import Resource from '#C/resource';
import { Menu, Tray } from 'electron';
import { trayMenuTemplate } from './menu';

export class KaraTray {

    public static createInstance(): KaraTray {

        if (!this._instance) {
            this._instance = new KaraTray();
        }
        return this._instance;
    }

    private static _instance: KaraTray | undefined;

    private _tray: Tray;

    private constructor() {

        this._tray = new Tray(Resource.tray);
        this._tray.setToolTip('Kara');
        this._tray.setContextMenu(this._getMenu());
    }

    private _getMenu(): Menu {

        return Menu.buildFromTemplate(trayMenuTemplate);
    }
}
