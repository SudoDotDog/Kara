/**
 * @author WMXPY
 * @namespace Main
 * @description Index
 */

import { app, dialog } from "electron";
import { registerConnor } from "./declare/error";
import { bindingGlobalShortcut } from "./module/binding/binding";
import { KaraTray } from "./module/tray/tray";
import { Execute } from "./scene/execute/execute";

registerConnor();
const executeScene = Execute.createInstance();

app.on("ready", () => {
    executeScene.create();
    KaraTray.createInstance();
    bindingGlobalShortcut(() => {
        dialog.showMessageBox({
            type: 'info',
            message: 'INFO',
            buttons: ['OK'],
        });
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (!executeScene.exist()) {
        executeScene.create();
    }
});
