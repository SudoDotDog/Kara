/**
 * @author WMXPY
 * @namespace Scene_Execute_Util
 * @description Trigger
 */

import { SCENE_EXECUTE_IPC } from "#C/ipc";
import { ipcRenderer } from "electron";

export const hideExecuteWindow = () => {

    ipcRenderer.send(SCENE_EXECUTE_IPC.HIDE_WINDOW);
};
