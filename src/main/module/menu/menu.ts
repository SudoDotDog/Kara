/**
 * @author WMXPY
 * @namespace Main_Module_Menu
 * @description Menu
 */

import { BUILD_MODE } from "#C/declare";
import { Menu } from "electron";
import { menuTemplate } from "./template";

export const bindingGlobalMenu = (): void => {

    if (process.env.NODE_ENV === BUILD_MODE.PRODUCTION) {

        const menu: Menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
    }

    return;
};
