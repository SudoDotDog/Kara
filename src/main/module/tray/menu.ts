/**
 * @author WMXPY
 * @namespace Main_Module_Tray
 * @description Menu template
 */

import { IScene } from "#M/declare/scene";
import { Center } from "#M/scene/center/execute";
import { app } from "electron";

const centerScene: IScene = Center.createInstance();

export const trayMenuTemplate = [
    {
        label: 'Command Center',
        click: (): void => {
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
