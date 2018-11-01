/**
 * @author WMXPY
 * @namespace Provides
 * @description Provider
 */

import { ICommand } from "#P/declare";

export class Provider {

    private static _instance: Provider;

    public static get instance(): Provider {

        if (!this._instance) {
            this._instance = new Provider();
        }

        return this._instance;
    }

    private _commandMap: Map<string, ICommand>;

    private constructor() {

        this._commandMap = new Map<string, ICommand>();
    }

    public get length(): number {

        return this._commandMap.size;
    }

    public isEmpty(): boolean {

        return this._commandMap.size === 0;
    }

    public register(command: ICommand): Provider {

        this._commandMap.set(command.command, command);
        return this;
    }
}
