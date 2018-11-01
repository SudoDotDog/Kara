/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Box
 * @description Type
 */

import { Action } from "redux";
import { EXECUTE_ACTIONS } from "../declare";

export interface IBoxStore {

    readonly counter: number;
}

export interface ICounterReducerAction extends Action<EXECUTE_ACTIONS> {
    number: number;
}
