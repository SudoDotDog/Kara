/**
 * @author WMXPY
 * @namespace Main
 * @description Index
 */

import { app } from "electron";
import { registerConnor } from "./declare/error";
import { Scepter } from "./scene/scepter/scepter";

registerConnor();
const scepterScene = Scepter.createInstance();

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
