/**
 * @author WMXPY
 * @namespace Main
 * @description Index
 */

import { app, BrowserWindow, Menu } from "electron";
import Config from "../config/config";
import { menuTemplate } from "./menu";

let win: BrowserWindow;

const createWindow: () => void = () => {
    if (Config.isDebug) {
        win = new BrowserWindow({
            width: 1850,
            height: 1020,
            show: false,
            frame: false,
            backgroundColor: Config.backgroundColor,
        });
        win.loadURL(Config.devURL);
        win.webContents.openDevTools();
    } else {
        win = new BrowserWindow({
            width: 1350,
            height: 1020,
            show: false,
            frame: false,
            backgroundColor: Config.backgroundColor,
        });
        win.loadURL(Config.prodURL);
        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
    }

    win.on("ready-to-show", (): void => {
        win.show();
        win.focus();
    });
};

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});
