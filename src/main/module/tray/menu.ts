/**
 * @author WMXPY
 * @namespace Main_Module_Tray
 * @description Menu template
 */

import { IScene } from "#M/declare/scene";
import { Center } from "#M/scene/center/center";
import { Scepter } from "#M/scene/scepter/scepter";
import { app, MenuItemConstructorOptions } from "electron";

export const trayMenuTemplate: MenuItemConstructorOptions[] = [

    {
        label: 'Command Center',
        click: (): void => {

            const centerScene: IScene = Center.createInstance();
            centerScene.createOrFocus();
        },
    },
    {
        label: 'Scepter',
        click: (): void => {

            const scepterScene: IScene = Scepter.createInstance();
            scepterScene.createOrFocus();
        },
    },
    {
        type: 'separator',
    },
    {
        label: 'Exit',
        click: (): void => {
            app.quit();
        },
    },
];
