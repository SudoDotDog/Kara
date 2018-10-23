/**
 * @author WMXPY
 * @namespace Box
 * @description Box
 */

import { Canvas, CanvasClass } from '@sudoo/terminal';

export class Box {

    private _canvas: CanvasClass;

    public constructor() {

        this._canvas = Canvas();
    }

    public get canvas() {
        return this._canvas;
    }
}
