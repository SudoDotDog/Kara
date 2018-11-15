/**
 * @author WMXPY
 * @namespace Config_Storage
 * @description Storage
 */

import { app, remote } from "electron";
import * as Fs from 'fs';
import * as Path from 'path';
import { StorageFile } from "./file";

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

    public resource<T>(filename: string): StorageFile<T> {

        const folder: string = this._getKaraFolder();
        this._checkDir(folder);
        const path: string = Path.join(folder, filename);
        return StorageFile.fromPath<T>(path);
    }

    private _getKaraFolder(): string {

        return Path.join(this._path, '.kara');
    }

    private _checkDir(folder: string): void {

        const exist: boolean = Fs.existsSync(folder);
        if (!exist) {
            Fs.mkdirSync(folder);
        }
    }

    private _isRenderer(): boolean {

        if (!Boolean(process)) return true;
        if ((process as any).type === 'renderer') return true;
        return false;
    }
}
