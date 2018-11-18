/**
 * @author WMXPY
 * @namespace Scene_Execute_Util
 * @description Resizer
 */

import { ipcRenderer } from "test/mock/global/electron";

export class ExecuteResizer {

    public static extendExecute(): void {

        if (!this._instance) {

            this._instance = new ExecuteResizer(false);
        }
        this._instance.extend();
    }

    public static reduceExecute(): void {

        if (!this._instance) {

            this._instance = new ExecuteResizer(true);
        }
        this._instance.reduce();
    }

    private static _instance: ExecuteResizer | undefined;

    private _extended: boolean;

    private constructor(init: boolean) {

        this._extended = init;
    }

    private extend(): void {

        if (!this._extended) {
            this._extended = true;
            ipcRenderer.send('main-execute-extend-height');
        }
    }

    private reduce(): void {

        if (this._extended) {
            this._extended = false;
            ipcRenderer.send('main-execute-reduce-height');
        }
    }
}
