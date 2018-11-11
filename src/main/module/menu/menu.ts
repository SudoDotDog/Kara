/**
 * @author WMXPY
 * @namespace Main_Module_Menu
 * @description Menu
 */

import { Menu } from "electron";
import { menuTemplate } from "./template";

export const bindingGlobalMenu = (): void => {

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
    return;
};
