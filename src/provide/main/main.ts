/**
 * @author WMXPY
 * @namespace Provides_Main
 * @description Main Provider
 */

import { PROVIDER_IPC } from "#C/ipc";
import { _Map } from "@sudoo/bark/map";
import { ipcMain, IpcMessageEvent, webContents } from "electron";
import { ICommand } from "../declare";
import { md5Encode } from "../util/crypto";
import { updateAllCommandsToResource } from "./register";

export class MainProvider {

    private static _instance: MainProvider;

    public static get instance(): MainProvider {

        if (!this._instance) {
            this._instance = new MainProvider();
        }

        return this._instance;
    }

    private _commandMap: Record<string, ICommand>;

    private constructor() {

        this._commandMap = {};

        this._updateListener = this._updateListener.bind(this);
        this._replaceListener = this._replaceListener.bind(this);

        this.mount();
    }

    public get length(): number {

        return _Map.keys(this._commandMap).length;
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
            .forEach((web: webContents) => web.send(PROVIDER_IPC.CHECKSUM, checksum));

        return this;
    }

    protected mount(): void {

        ipcMain.on(PROVIDER_IPC.REQUEST_UPDATE, this._updateListener);
        ipcMain.on(PROVIDER_IPC.REQUEST_REPLACE, this._replaceListener);
    }

    protected unmount(): void {

        ipcMain.removeListener(PROVIDER_IPC.REQUEST_UPDATE, this._updateListener);
        ipcMain.removeListener(PROVIDER_IPC.REQUEST_REPLACE, this._replaceListener);
    }

    private _updateListener(event: IpcMessageEvent): void {

        const jsonified: string = JSON.stringify(this._commandMap);
        event.sender.send(PROVIDER_IPC.REQUEST_UPDATE_RESPONSE, jsonified);
    }

    private _replaceListener(event: IpcMessageEvent, commands: ICommand[]): void {

        updateAllCommandsToResource(commands).then(() => event.sender.send(PROVIDER_IPC.REQUEST_REPLACE_RESPONSE));
    }
}
