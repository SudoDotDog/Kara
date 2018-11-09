/**
 * @author WMXPY
 * @namespace Main_Module_Tray
 * @description Menu template
 */

import { app } from "electron";

export const trayMenuTemplate = [
    {
        label: 'Exit',
        click: () => {
            app.quit();
        },
    },
];
