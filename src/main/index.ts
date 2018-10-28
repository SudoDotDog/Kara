/**
 * @author WMXPY
 * @namespace Main
 * @description Index
 */

import { app } from "electron";
import { registerConnor } from "./declare/error";
import { Execute } from "./scene/execute/execute";

registerConnor();
const scepterScene = Execute.createInstance();

app.on("ready", () => {
    scepterScene.create();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (!scepterScene.exist()) {
        scepterScene.create();
    }
});
