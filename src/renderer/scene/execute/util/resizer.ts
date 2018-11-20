/**
 * @author WMXPY
 * @namespace Scene_Execute_Util
 * @description Resizer
 */

import { SCENE_EXECUTE_IPC } from "#C/ipc";
import { ipcRenderer } from "electron";

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

        // if (!this._extended) {
        //     this._extended = true;
        ipcRenderer.send(SCENE_EXECUTE_IPC.EXTEND_HEIGHT);
        // }
    }

    private reduce(): void {

        // if (this._extended) {
        //     this._extended = false;
        ipcRenderer.send(SCENE_EXECUTE_IPC.REDUCE_HEIGHT);
        // }
    }
}
