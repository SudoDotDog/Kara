/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Buffer
 * @description Type
 */

import { COMMAND_DECLARE } from "#P/declare";
import { Action } from "redux";
import { EXECUTE_ACTIONS } from "../declare";

export interface IBufferStore {

    readonly input: string;
}

export interface ISetInputReducerAction extends Action<EXECUTE_ACTIONS> {

    readonly input: string;
}
