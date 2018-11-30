/**
 * @author WMXPY
 * @namespace Provides_Main
 * @description Main Provider
 */

import { PROVIDER_IPC } from "#C/ipc";
import { ipcMain, IpcMessageEvent, webContents } from "electron";
import { ICommand } from "../declare";
import { md5Encode } from "../util/crypto";

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

        this._commandMap = {};

        this._updateListener = this._updateListener.bind(this);
        ipcMain.on(PROVIDER_IPC.REQUEST_UPDATE, this._updateListener);
    }

    public get length(): number {

        return Object.keys(this._commandMap).length;
    }

    public clean(): MainProvider {

        this._commandMap = {};
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

        const jsonified: string = JSON.stringify(this._commandMap);
        const checksum: string = md5Encode(jsonified);
        webContents.getAllWebContents()
            .forEach((web: webContents) => {
                web.send(PROVIDER_IPC.CHECKSUM, checksum);
            });
        return this;
    }

    private _updateListener(event: IpcMessageEvent): void {

        const jsonified: string = JSON.stringify(this._commandMap);
        event.sender.send(PROVIDER_IPC.REQUEST_UPDATE_RESPONSE, jsonified);
    }
}
