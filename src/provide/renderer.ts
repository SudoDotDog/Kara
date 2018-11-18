/**
 * @author WMXPY
 * @namespace Provides
 * @description Provider
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE, ICommand, ICommandDeclareScript } from "#P/declare";
import { _String } from '@sudoo/bark';
import { END_SIGNAL, MarkedResult } from "@sudoo/marked";
import Connor, { ErrorCreationFunction } from "connor";
import { IpcMessageEvent, ipcRenderer } from "electron";
import { initProvideErrorDictionary, PROVIDE_ERROR_CODE, PROVIDE_MODULE_NAME } from "./declare/error";
import { executeScript } from "./module/marked";
import { md5Encode } from "./util/crypto";
import { createErrorCommandDeclare } from "./util/declare";

export class Provider {

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

        ipcRenderer.on('provider-renderer-checksum', this._handleProviderRendererUpdate);
    }

    public get length(): number {

        return Object.keys(this._commandMap).length;
    }

    public clean(): Provider {

        this._commandMap = {};
        return this;
    }

    public isEmpty(): boolean {

        return this.length === 0;
    }

    public async execute(current: COMMAND_DECLARE): Promise<COMMAND_DECLARE> {

        switch (current.type) {

            case COMMAND_DECLARE_TYPE.SCRIPT: {
                const result: MarkedResult = await this.executeScript(current);
                if (result.signal === END_SIGNAL.SUCCEED) {

                    return current.next;
                }
                break;
            }
        }

        return createErrorCommandDeclare();
    }

    public async executeScript(declare: ICommandDeclareScript): Promise<MarkedResult> {

        return executeScript(declare.script);
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

        const result: { command: ICommand; length: number; }
            = Object.keys(this._commandMap).reduce<any>(
                (nearest: { command: ICommand; length: number; }, key: string) => {

                    const current: ICommand = this._commandMap[key];
                    const target: string = current.command;

                    const distance: number = _String
                        .compare(command)
                        .with(target)
                        .unsensitiveContain(15)
                        .length(3)
                        .distance;

                    if (distance < nearest.length) {

                        return {
                            command: current,
                            length: distance,
                        };
                    }

                    return nearest;
                }, { command: null, length: Infinity });

        return result.command;
    }

    public requestUpdate(): void {

        ipcRenderer.once('provider-main-request-update-response', (resEvent: IpcMessageEvent, jsonifiedMap: string) => {

            const map: any = JSON.parse(jsonifiedMap);
            this._commandMap = map;
        });
        ipcRenderer.send('provider-main-request-update');
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
