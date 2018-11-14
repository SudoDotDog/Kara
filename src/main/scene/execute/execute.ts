/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Execute
 */

import Config from '#C/config';
import { BUILD_MODE } from '#C/declare';
import { MainProvider } from '#P/main';
import Connor, { ErrorCreationFunction } from 'connor';
import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { ERROR_CODE, MODULE_NAME } from '../../declare/error';
import { IScene } from '../../declare/scene';

export class Execute implements IScene {

    public static createInstance(): IScene {

        if (!this._instance) {
            this._instance = new Execute();
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

    public get isCreated(): boolean {

        return Boolean(this._browserWindow);
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
            this._ready = true;
            const mainProvider: MainProvider = MainProvider.instance;
            mainProvider.flush();
        });
    }

    private _createBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow(this._getWindowSetting());
        windows.loadURL(Config.execute.prodURL);
        return windows;
    }

    private _createDebugBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow({
            ...this._getWindowSetting(),
            alwaysOnTop: false,
        });
        windows.loadURL(Config.execute.devURL);
        windows.webContents.openDevTools();
        return windows;
    }

    private _getWindowSetting(): BrowserWindowConstructorOptions {

        return {

            width: 480,
            height: 80,

            x: 30,
            y: 30,

            frame: false,
            hasShadow: false,
            show: false,
            transparent: true,

            alwaysOnTop: true,
            resizable: false,
            fullscreenable: false,
            movable: false,
            maximizable: false,
            minimizable: false,
        };
    }

    private _getBrowserWindow(): BrowserWindow {

        if (this._browserWindow) {
            return this._browserWindow;
        }
        throw this._error(ERROR_CODE.WINDOW_NOT_FOUND, 'Execute');
    }
}
