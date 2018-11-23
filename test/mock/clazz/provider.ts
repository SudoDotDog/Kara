/**
 * @author WMXPY
 * @namespace Mock_Clazz
 * @description Provider
 */

import { ICommand } from "#P/declare";
import { Construable } from "../construable";

export class MockProvider extends Construable {

    public match(command: string): ICommand | null {

        this._called.push(['match', command]);
        return this._shouldReturn.get('match');
    }

    public nearest(command: string): ICommand | null {

        this._called.push(['nearest', command]);
        return this._shouldReturn.get('command');
    }
}
