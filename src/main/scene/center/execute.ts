/**
 * @author WMXPY
 * @namespace Scene_Center
 * @description Center
 */

import Connor, { ErrorCreationFunction } from 'connor';
import { BrowserWindow, BrowserWindowConstructorOptions, Menu } from 'electron';
import Config from '../../../config/config';
import { ERROR_CODE, MODULE_NAME } from '../../declare/error';
import { IScene } from '../../declare/scene';
import { menuTemplate } from './menu';

export class Center implements IScene {

    public static createInstance(): IScene {

        if (!this._instance) {
            this._instance = new Center();
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
    private _error: ErrorCreationFunction;
    private _ready: boolean;

    private constructor() {

        this._browserWindow = null;
        this._error = Connor.getErrorCreator(MODULE_NAME);
        this._ready = false;
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

    public trigger(): IScene {

        const browserWindow = this._getBrowserWindow();
        if (browserWindow.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
        return this;
    }

    public show(): IScene {

        const browserWindow = this._getBrowserWindow();
        browserWindow.show();
        return this;
    }

    public hide(): IScene {

        const browserWindow = this._getBrowserWindow();
        browserWindow.hide();
        return this;
    }

    private _bind(windows: BrowserWindow): void {

        windows.on('ready-to-show', (): void => {
            this._ready = true;
        });
    }

    private _createBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow(this._getWindowSetting());
        windows.loadURL(Config.center.prodURL);
        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
        return windows;
    }

    private _createDebugBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow({
            ...this._getWindowSetting(),
            alwaysOnTop: false,
        });
        windows.loadURL(Config.center.devURL);
        windows.webContents.openDevTools();
        return windows;
    }

    private _getWindowSetting(): BrowserWindowConstructorOptions {

        return {

            width: 1350,
            height: 1020,

            show: false,
            backgroundColor: Config.backgroundColor,
        };
    }

    private _getBrowserWindow(): BrowserWindow {

        if (this._browserWindow) {
            return this._browserWindow;
        }
        throw this._error(ERROR_CODE.WINDOW_NOT_FOUND, 'Center');
    }
}
