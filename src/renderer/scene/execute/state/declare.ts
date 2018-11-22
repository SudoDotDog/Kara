/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Declare
 */

import { ICurrentStore } from "./current/type";

export interface IStore {

    readonly current: ICurrentStore;
}

export enum EXECUTE_ACTIONS {

    COUNTER = 'COUNTER',
}
