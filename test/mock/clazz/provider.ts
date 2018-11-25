/**
 * @author WMXPY
 * @namespace Mock_Clazz
 * @description Provider
 */

import { COMMAND_DECLARE, ICommand } from "#P/declare";
import { Construable } from "../construable";

export class MockProvider extends Construable {

    public execute(declare: COMMAND_DECLARE): Promise<COMMAND_DECLARE> {

        this._called.push(['execute', declare]);
        return this._shouldReturn.get('execute');
    }

    public match(command: string): ICommand | null {

        this._called.push(['match', command]);
        return this._shouldReturn.get('match');
    }

    public nearest(command: string): ICommand | null {

        this._called.push(['nearest', command]);
        return this._shouldReturn.get('nearest');
    }
}
