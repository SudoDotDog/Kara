/**
 * @author WMXPY
 * @namespace Main_Module_Tray
 * @description Menu template
 */

import { IScene } from "#M/declare/scene";
import { Center } from "#M/scene/center/center";
import { app, MenuItemConstructorOptions } from "electron";

export const trayMenuTemplate: MenuItemConstructorOptions[] = [
    {
        label: 'Command Center',
        click: (): void => {
            const centerScene: IScene = Center.createInstance();

            if (centerScene.isCreated) {
                centerScene.focus();
            } else {
                centerScene.create();
            }
        },
    },
    {
        label: 'Exit',
        click: (): void => {
            app.quit();
        },
    },
];
