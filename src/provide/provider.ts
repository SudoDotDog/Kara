/**
 * @author WMXPY
 * @namespace Provides
 * @description Provider
 */

import { ICommand } from "#P/declare";
import { _String } from '@sudoo/bark';

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

    private constructor() {

        this._commandMap = Object.create(null);
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

        if (this.isEmpty()) return null;

        return Object.keys(this._commandMap).reduce<any>(
            (nearest: { command: ICommand; length: number; }, key: string) => {

                const current: ICommand = this._commandMap[key];
                const distance: number = _String.similar(command, current.command);
                if (distance < nearest.length) {

                    return {
                        command: current,
                        length: distance,
                    };
                }
                return nearest;
            }, { command: null, length: Infinity }).command;
    }
}
