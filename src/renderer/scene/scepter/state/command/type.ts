/**
 * @author WMXPY
 * @namespace Scene_Scepter_State_Command
 * @description Type
 */

import { ICommand } from "#P/declare";
import { Action } from "redux";
import { SCEPTER_ACTIONS } from "../declare";

export interface IScepterCommandStore {

    readonly commands: ICommand[];
    readonly current: ICommand | null;
    readonly path: string[];
}


export interface IScepterSetCurrentReducerAction extends Action<SCEPTER_ACTIONS> {

    readonly current: ICommand;
}

export interface IScepterSetCommandsReducerAction extends Action<SCEPTER_ACTIONS> {

    readonly commands: ICommand[];
}

export interface IScepterSetPathReducerAction extends Action<SCEPTER_ACTIONS> {
    readonly path: string[];
}
