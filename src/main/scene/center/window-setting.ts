/**
 * @author WMXPY
 * @namespace Scene_Center
 * @description Window Setting
 */

import Config from "#C/config";
import { BrowserWindowConstructorOptions } from "electron";

export const getCenterWindowSetting = (): BrowserWindowConstructorOptions => ({

    width: 600,
    height: 600,

    maximizable: false,
    resizable: false,
    fullscreenable: false,

    show: false,
    backgroundColor: Config.backgroundColor,
});
