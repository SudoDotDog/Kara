/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Window Setting
 */

import { BrowserWindowConstructorOptions } from "electron";

export const getExecuteWindowSetting = (): BrowserWindowConstructorOptions => ({

    width: 480,
    height: 80,

    x: 30,
    y: 30,

    frame: false,
    hasShadow: false,
    show: false,
    transparent: true,

    alwaysOnTop: true,
    resizable: false,
    fullscreenable: false,
    maximizable: false,
    minimizable: false,
});
