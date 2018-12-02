/**
 * @author WMXPY
 * @namespace Provides
 * @description Provider
 */

import { PROVIDER_IPC } from "#C/ipc";
import { ICommand } from "#P/declare";
import { _Map } from "@sudoo/bark";
import Connor, { ErrorCreationFunction } from "connor";
import { IpcMessageEvent, ipcRenderer } from "electron";
import { initProvideErrorDictionary, PROVIDE_ERROR_CODE, PROVIDE_MODULE_NAME } from "../declare/error";
import { md5Encode } from "../util/crypto";
import { findNearestCommand } from "../util/nearest";

export class Provider {

    public static init(): void {

        this._instance = new Provider();
    }

    private static _instance: Provider;

    public static get instance(): Provider {

        if (!this._instance) {
            this._instance = new Provider();
        }

        return this._instance;
    }

    private _commandMap: {
        [key: string]: ICommand;
    };
    private _error: ErrorCreationFunction;

    private constructor() {

        this._commandMap = {};

        this._handleProviderRendererUpdate = this._handleProviderRendererUpdate.bind(this);
        this._error = Connor.instance(PROVIDE_MODULE_NAME).getErrorCreator();

        initProvideErrorDictionary();

        this.mount();
    }

    public get commands(): ICommand[] {

        return _Map.keys(this._commandMap).map((key: string) => this._commandMap[key]);
    }

    public get length(): number {

        return _Map.keys(this._commandMap).length;
    }

    public clean(): Provider {

        this._commandMap = {};
        return this;
    }

    public isEmpty(): boolean {

        return this.length === 0;
    }

    public match(command: string): ICommand | null {

        if (Boolean(this._commandMap[command])) {

            const content: ICommand = this._commandMap[command];
            return content;
        }

        return null;
    }

    public register(command: ICommand): Provider {

        this._commandMap[command.command] = command;
        return this;
    }

    public nearest(command: string): ICommand | null {

        this._checkEmpty();

        const result = findNearestCommand(this._commandMap, command);
        return result.command;
    }

    public requestUpdate(): void {

        ipcRenderer.once(PROVIDER_IPC.REQUEST_UPDATE_RESPONSE, (resEvent: IpcMessageEvent, jsonifiedMap: string) => {

            const map: any = JSON.parse(jsonifiedMap);
            this._commandMap = map;
        });
        ipcRenderer.send(PROVIDER_IPC.REQUEST_UPDATE);
    }

    protected mount(): void {

        ipcRenderer.on(PROVIDER_IPC.CHECKSUM, this._handleProviderRendererUpdate);
    }

    protected unmount(): void {

        ipcRenderer.removeListener(PROVIDER_IPC.CHECKSUM, this._handleProviderRendererUpdate);
    }

    private _checkEmpty(): void {

        if (this.isEmpty()) {

            this._error(PROVIDE_ERROR_CODE.PROVIDE_IS_EMPTY);
        }
        return;
    }

    private _handleProviderRendererUpdate(event: IpcMessageEvent, checksum: string): void {

        const jsonified: string = JSON.stringify(this._commandMap);
        const currentChecksum: string = md5Encode(jsonified);

        if (currentChecksum !== checksum) {
            this.requestUpdate();
        }
    }
}
