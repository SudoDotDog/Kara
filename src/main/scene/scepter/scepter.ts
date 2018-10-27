/**
 * @author WMXPY
 * @namespace Scene_Scepter
 * @description Scepter
 */

import { BrowserWindow, Menu } from 'electron';
import Config from '../../../config/config';
import { IScene } from '../../declare/scene';
import { menuTemplate } from './menu';

export class Scepter implements IScene {


    public static createInstance(): IScene {

        if (!this._instance) {
            this._instance = new Scepter();
        }
        return this._instance;
    }

    public static removeInstance(): void {

        if (this._instance) {
            this._instance.remove();
        }
        this._instance = undefined;
    }

    private static _instance: IScene | undefined;

    private _browserWindow: BrowserWindow | null;

    private constructor() {

        this._browserWindow = null;
    }

    public create(): IScene {

        this._browserWindow =
            process.env.NODE_ENV === 'development'
                ? this._createDebugBrowserWindow()
                : this._createBrowserWindow();
        this._bind(this._browserWindow);
        return this;
    }

    public exist(): boolean {

        return Boolean(this._browserWindow);
    }

    public remove(): IScene {

        const browserWindow = this._getBrowserWindow();
        browserWindow.close();
        browserWindow.removeAllListeners();
        this._browserWindow = null;
        return this;
    }

    private _bind(windows: BrowserWindow): void {

        windows.on('ready-to-show', (): void => {
            windows.show();
            windows.focus();
        });
    }

    private _createBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow({

            width: 1350,
            height: 1020,
            show: false,
            frame: false,
            backgroundColor: Config.backgroundColor,
        });
        windows.loadURL(Config.prodURL);
        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
        return windows;
    }

    private _createDebugBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow({

            width: 1850,
            height: 1020,
            show: false,
            frame: false,
            backgroundColor: Config.backgroundColor,
        });
        windows.loadURL(Config.devURL);
        windows.webContents.openDevTools();
        return windows;
    }

    private _getBrowserWindow(): BrowserWindow {

        if (this._browserWindow) {
            return this._browserWindow;
        }
        throw new Error('123');
    }
}