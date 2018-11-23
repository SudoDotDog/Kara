/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Buffer
 * @description Type
 */

import { Action } from "redux";
import { EXECUTE_ACTIONS } from "../declare";

export interface IApplicationStore {

    readonly expend: boolean;
}

export interface ISetExpendReducerAction extends Action<EXECUTE_ACTIONS> {

    readonly expend: boolean;
}
