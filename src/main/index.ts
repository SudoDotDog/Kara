/**
 * @author WMXPY
 * @namespace Main
 * @description Index
 */

import { app } from "electron";
import { registerConnor } from "./declare/error";
import { IScene } from "./declare/scene";
import { bindingGlobalShortcut } from "./module/binding/binding";
import { KaraTray } from "./module/tray/tray";
import { Execute } from "./scene/execute/execute";

registerConnor();
const executeScene: IScene = Execute.createInstance();

app.on("ready", (): void => {
    executeScene.create();
    KaraTray.createInstance();
    bindingGlobalShortcut(() => executeScene.trigger());
});

app.on("window-all-closed", (): void => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", (): void => {
    if (!executeScene.exist()) {
        executeScene.create();
    }
});
