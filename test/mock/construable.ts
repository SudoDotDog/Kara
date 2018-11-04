/**
 * @author WMXPY
 * @namespace Mock
 * @description Construable
 */

export class Construable {

    public static instances: any[] = [];

    public static clear() {

        this._called = [];
        this.instances = [];
    }

    public static get staticCalled(): any[][] {
        return this._called;
    }

    protected static _called: any[][] = [];

    protected _constructArgs: any[];
    protected _called: any[][];

    public constructor(...args: any[]) {

        this._constructArgs = args;
        this._called = [];
        Construable.instances.push(this);
    }

    public get constructArgs(): any[] {
        return this._constructArgs;
    }

    public get called(): any[][] {
        return this._called;
    }
}
