/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Declare
 */

import { IBufferStore } from "./buffer/type";
import { ICurrentStore } from "./current/type";

export interface IStore {

    readonly buffer: IBufferStore;
    readonly current: ICurrentStore;
}

export enum EXECUTE_ACTIONS {

    // current
    SET_CURRENT = 'SET_CURRENT',

    // buffer
    SET_INPUT = 'SET_INPUT',
}
