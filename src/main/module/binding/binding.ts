/**
 * @author WMXPY
 * @namespace Main_Module_Binding
 * @description Binding
 */

import Config from "#C/config";
import { globalShortcut } from "electron";

export const bindingGlobalShortcut = (onPress: () => void): void => {

    globalShortcut.register(Config.shortcut, onPress);
    return;
};
