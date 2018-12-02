/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Execute
 */

import Config from '#C/config';
import { BUILD_MODE } from '#C/declare';
import { SCENE_EXECUTE_IPC } from '#C/ipc';
import { MainProvider } from '#P/main/main';
import Connor, { ErrorCreationFunction } from 'connor';
import { BrowserWindow, ipcMain } from 'electron';
import { ERROR_CODE, MODULE_NAME } from '../../declare/error';
import { IScene } from '../../declare/scene';
import { getExecuteWindowSetting } from './window-setting';

export class Execute implements IScene {

    public static createInstance(): Execute {

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

    private static _instance: Execute | undefined;

    private _browserWindow: BrowserWindow | null;
    private _error: ErrorCreationFunction;
    private _ready: boolean;

    private constructor() {

        this._browserWindow = null;
        this._error = Connor.getErrorCreator(MODULE_NAME);
        this._ready = false;

        this.hide = this.hide.bind(this);
        this._extendHeight = this._extendHeight.bind(this);
        this._reduceHeight = this._reduceHeight.bind(this);
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

        this._createIPCListeners();
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

        this._removeIPCListeners();
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
            this._ready = true;
            const mainProvider: MainProvider = MainProvider.instance;
            mainProvider.flush();
        });
    }

    private _createBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow(getExecuteWindowSetting());
        windows.loadURL(Config.execute.prodURL);
        return windows;
    }

    private _createDebugBrowserWindow(): BrowserWindow {

        const windows: BrowserWindow = new BrowserWindow(getExecuteWindowSetting());
        windows.loadURL(Config.execute.devURL);
        windows.webContents.openDevTools();
        return windows;
    }

    private _getBrowserWindow(): BrowserWindow {

        if (this._browserWindow) {
            return this._browserWindow;
        }
        throw this._error(ERROR_CODE.WINDOW_NOT_FOUND, 'Execute');
    }

    private _createIPCListeners(): void {

        ipcMain.on(SCENE_EXECUTE_IPC.EXTEND_HEIGHT, this._extendHeight);
        ipcMain.on(SCENE_EXECUTE_IPC.REDUCE_HEIGHT, this._reduceHeight);
        ipcMain.on(SCENE_EXECUTE_IPC.HIDE_WINDOW, this.hide);
        return;
    }

    private _removeIPCListeners(): void {

        ipcMain.removeListener(SCENE_EXECUTE_IPC.EXTEND_HEIGHT, this._extendHeight);
        ipcMain.removeListener(SCENE_EXECUTE_IPC.REDUCE_HEIGHT, this._reduceHeight);
        ipcMain.removeListener(SCENE_EXECUTE_IPC.HIDE_WINDOW, this.hide);
        return;
    }

    private _extendHeight(): void {

        const browserWindow = this._getBrowserWindow();

        browserWindow.setContentSize(480, 560, true);
        return;
    }

    private _reduceHeight(): void {

        const browserWindow = this._getBrowserWindow();

        browserWindow.setContentSize(480, 80, true);
        return;
    }
}
