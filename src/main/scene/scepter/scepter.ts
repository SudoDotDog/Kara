/**
 * @author WMXPY
 * @namespace Scene_Scepter
 * @description Scepter
 */

import Connor, { ErrorCreationFunction } from 'connor';
import { BrowserWindow } from 'electron';
import Config from '../../../config/config';
import { ERROR_CODE, MODULE_NAME } from '../../declare/error';
import { IScene } from '../../declare/scene';

export class Scepter implements IScene {

    public static createInstance(): Scepter {

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

    private static _instance: Scepter | undefined;

    private _browserWindow: BrowserWindow | null;
    private _error: ErrorCreationFunction;

    private constructor() {

        this._browserWindow = null;
        this._error = Connor.getErrorCreator(MODULE_NAME);
    }

    public get isCreated(): boolean {

        return Boolean(this._browserWindow);
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

    public createOrFocus(): IScene {

        if (this.isCreated) {
            this.focus();
        } else {
            this.create();
        }

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
            backgroundColor: Config.backgroundColor,
        });
        windows.loadURL(Config.scepter.prodURL);
        return windows;
    }

    private _createDebugBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow({

            width: 1850,
            height: 1020,
            show: false,
            backgroundColor: Config.backgroundColor,
        });
        windows.loadURL(Config.scepter.devURL);
        windows.webContents.openDevTools();
        return windows;
    }

    private _getBrowserWindow(): BrowserWindow {

        if (this._browserWindow) {
            return this._browserWindow;
        }
        throw this._error(ERROR_CODE.WINDOW_NOT_FOUND, 'Scepter');
    }
}
