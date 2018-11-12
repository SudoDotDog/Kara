/**
 * @author WMXPY
 * @namespace Provides
 * @description Main Provider
 */

import { ipcMain, IpcMessageEvent, WebContents } from "electron";
import { ICommand } from "./declare";

export class MainProvider {

    private static _instance: MainProvider;

    public static get instance(): MainProvider {

        if (!this._instance) {
            this._instance = new MainProvider();
        }

        return this._instance;
    }

    private _buffer: Array<{
        key: string;
        value: ICommand;
    }>;

    private constructor() {

        this._buffer = [];

        ipcMain.on('provider-main-request-update', this._flushListener);
    }

    public flush() {

        ipcMain.emit('provider-renderer-update');
    }

    public init() {

        ipcMain.emit('provider-renderer-update');
    }

    private _flushListener = (): void => {

        WebContents.getAllWebContents()
            .forEach((web: WebContents) => {
                web.send('provider-renderer-update');
            });
    }
}
