/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Current
 * @description Type
 */

import { COMMAND_DECLARE } from "#P/declare";
import { Action } from "redux";
import { EXECUTE_ACTIONS } from "../declare";

export interface ICurrentStore {

    readonly current: COMMAND_DECLARE;
}

export interface ICurrentReducerAction extends Action<EXECUTE_ACTIONS> {

    current: COMMAND_DECLARE;
}
