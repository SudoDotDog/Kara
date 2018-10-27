/**
 * @author WMXPY
 * @namespace Main
 * @description Index
 */

import { app } from "electron";
import { Scepter } from "./scene/scepter/scepter";

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
