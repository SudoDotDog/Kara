/**
 * @author WMXPY
 * @namespace Main
 * @description Index
 */

import { app } from "electron";
import { registerConnor } from "./declare/error";
import { IScene } from "./declare/scene";
import { bindingGlobalShortcut } from "./module/binding/binding";
import { bindingGlobalMenu } from "./module/menu/menu";
import { bindingMainProvider } from "./module/provider/provider";
import { KaraTray } from "./module/tray/tray";
import { Execute } from "./scene/execute/execute";

registerConnor();
const executeScene: IScene = Execute.createInstance();

const createExecuteScene = (): void => {
    if (!executeScene.exist()) {
        executeScene.create();
    }
};

app.on("ready", (): void => {

    bindingGlobalShortcut(() => executeScene.trigger());
    bindingGlobalMenu();
    bindingMainProvider();
    KaraTray.createInstance();

    createExecuteScene();
});

app.on("window-all-closed", createExecuteScene);
app.on("activate", createExecuteScene);
