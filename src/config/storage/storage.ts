/**
 * @author WMXPY
 * @namespace Config_Storage
 * @description Storage
 */

import { app, remote } from "electron";

export class Storage {

    public static get instance(): Storage {

        if (!this._instance) {
            this._instance = new Storage();
        }
        return this._instance;
    }

    private static _instance: Storage | undefined;

    private _path: string;

    private constructor() {

        if (this._isRenderer) {
            this._path = remote.app.getPath('userData');
        } else {
            this._path = app.getPath('userData');
        }
    }

    private _isRenderer(): boolean {

        if (!Boolean(process)) return true;
        if ((process as any).type === 'renderer') return true;
        return false;
    }
}
