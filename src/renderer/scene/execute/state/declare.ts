/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Declare
 */

import { IApplicationStore } from "./application/type";
import { IBufferStore } from "./buffer/type";
import { ICurrentStore } from "./current/type";

export interface IExecuteStore {

    readonly application: IApplicationStore;
    readonly buffer: IBufferStore;
    readonly current: ICurrentStore;
}

export enum EXECUTE_ACTIONS {

    // application
    SET_EXPEND = 'SET_EXPEND',

    // current
    SET_COMMAND = 'SET_COMMAND',
    SET_CURRENT = 'SET_CURRENT',

    // buffer
    SET_INPUT = 'SET_INPUT',
}
