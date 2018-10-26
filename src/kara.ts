/**
 * @author WMXPY
 * @namespace Kara
 * @description Kara
 */

import { ISArgsOption } from '@sudoo/command';

export class Kara {

    private _commands: Map<string, ISArgsOption>;

    public constructor() {

        this._commands = new Map<string, ISArgsOption>();
    }

    public register(command: string, option: ISArgsOption): Kara {

        this._commands.set(command, option);
        return this;
    }
}
