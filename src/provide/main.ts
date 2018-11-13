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

    private _commandMap: {
        [key: string]: ICommand;
    };

    private constructor() {

        this._commandMap = Object.create(null);

        ipcMain.on('provider-main-request-update', this._flushListener);
    }

    public get length(): number {

        return Object.keys(this._commandMap).length;
    }

    public clean(): MainProvider {

        this._commandMap = Object.create(null);
        return this;
    }

    public isEmpty(): boolean {

        return this.length === 0;
    }

    public register(command: ICommand): MainProvider {

        this._commandMap[command.command] = command;
        return this;
    }

    public flush(): MainProvider {

        ipcMain.emit('provider-renderer-checksum');
        return this;
    }

    public init(): MainProvider {

        ipcMain.emit('provider-renderer-checksum');
        return this;
    }

    private _flushListener = (): void => {

        WebContents.getAllWebContents()
            .forEach((web: WebContents) => {
                web.send('provider-renderer-update');
            });
    }
}
