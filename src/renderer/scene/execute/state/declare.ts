/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Declare
 */

import { IBoxStore } from "./box/type";

export interface IStore {

    readonly box: IBoxStore;
}

export enum EXECUTE_ACTIONS {

    COUNTER = 'COUNTER',
}
