/**
 * @author WMXPY
 * @namespace Scene_Scepter_State
 * @description Declare
 */

import { IScepterCommandStore } from "./command/type";

export interface IScepterStore {

    readonly command: IScepterCommandStore;
}

export enum SCEPTER_ACTIONS {

    SET_COMMANDS = 'SET_COMMANDS',
    SET_CURRENT = 'SET_CURRENT',
    SET_PATH = 'SET_PATH',
}
