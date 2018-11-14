/**
 * @author WMXPY
 * @namespace Scene_Center
 * @description Center
 */

import Config from '#C/config';
import { BUILD_MODE } from '#C/declare';
import Connor, { ErrorCreationFunction } from 'connor';
import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { ERROR_CODE, MODULE_NAME } from '../../declare/error';
import { IScene } from '../../declare/scene';

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

    private constructor() {

        this._browserWindow = null;
        this._error = Connor.getErrorCreator(MODULE_NAME);
    }

    public get isCreated(): boolean {

        if (this.exist()) {
            const browserWindow: BrowserWindow = this._browserWindow as BrowserWindow;
            return !browserWindow.isDestroyed();
        }
        return false;
    }

    public create(): IScene {

        this._browserWindow =
            process.env.NODE_ENV === BUILD_MODE.DEVELOPMENT
                ? this._createDebugBrowserWindow()
                : this._createBrowserWindow();
        this._bind(this._browserWindow);
        return this;
    }

    public exist(): boolean {

        return Boolean(this._browserWindow);
    }

    public remove(): IScene {

        const browserWindow: BrowserWindow = this._getBrowserWindow();
        browserWindow.close();
        browserWindow.removeAllListeners();
        this._browserWindow = null;
        return this;
    }

    public trigger(): IScene {

        const browserWindow: BrowserWindow = this._getBrowserWindow();
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

    public focus(): IScene {

        const browserWindow = this._getBrowserWindow();
        browserWindow.focus();
        return this;
    }

    public blur(): IScene {

        const browserWindow = this._getBrowserWindow();
        browserWindow.blur();
        return this;
    }

    private _bind(windows: BrowserWindow): void {

        windows.on('ready-to-show', (): void => {
            windows.show();
            windows.focus();
        });
    }

    private _createBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow(this._getWindowSetting());
        windows.loadURL(Config.center.prodURL);
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

            width: 600,
            height: 600,

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
