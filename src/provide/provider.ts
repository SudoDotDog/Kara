/**
 * @author WMXPY
 * @namespace Provides
 * @description Provider
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE, ICommand, ICommandDeclareScript } from "#P/declare";
import { _String } from '@sudoo/bark';
import { MarkedResult } from "@sudoo/marked";
import { END_SIGNAL } from "@sudoo/marked/dist/declare/node";
import Connor, { ErrorCreationFunction } from "connor";
import { PROVIDE_ERROR_CODE, PROVIDE_MODULE_NAME } from "./declare/error";
import { executeScript } from "./marked";

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

        this._commandMap = Object.create(null);
        this._error = Connor.instance(PROVIDE_MODULE_NAME).getErrorCreator();
    }

    public get length(): number {

        return Object.keys(this._commandMap).length;
    }

    public clean(): Provider {

        this._commandMap = Object.create(null);
        return this;
    }

    public isEmpty(): boolean {

        return this.length === 0;
    }

    public async execute(declare: COMMAND_DECLARE): Promise<boolean> {

        if (declare.type === COMMAND_DECLARE_TYPE.SCRIPT) {

            const result: MarkedResult = await this.executeScript(declare);
            if (result.signal === END_SIGNAL.SUCCEED) {
                return true;
            }
        }
        return false;
    }

    public async executeScript(declare: ICommandDeclareScript): Promise<MarkedResult> {

        return executeScript(declare.script);
    }

    public register(command: ICommand): Provider {

        this._commandMap[command.command] = command;
        return this;
    }

    public match(command: string): ICommand | null {

        if (Boolean(this._commandMap[command])) {

            const content: ICommand = this._commandMap[command];
            return content;
        }

        return null;
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

    private _checkEmpty(): void {

        if (this.isEmpty()) {

            this._error(PROVIDE_ERROR_CODE.PROVIDE_IS_EMPTY);
        }
        return;
    }
}
