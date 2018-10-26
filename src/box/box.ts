/**
 * @author WMXPY
 * @namespace Box
 * @description Box
 */

import { Canvas, CanvasClass, Imp, ImpClass } from '@sudoo/terminal';

export class Box {

    private static _instance: Box | undefined;

    public static get instance(): Box {

        if (!this._instance) {

            this._instance = new Box();
        }
        return this._instance;
    }

    private _canvas: CanvasClass;
    private _imp: ImpClass;

    private constructor() {

        this._canvas = Canvas();
        this._imp = Imp();
    }

    public get canvas() {

        return this._canvas;
    }

    public get imp() {

        return this._imp;
    }
}
