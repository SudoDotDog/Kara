/**
 * @author WMXPY
 * @namespace Main_Tray
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
