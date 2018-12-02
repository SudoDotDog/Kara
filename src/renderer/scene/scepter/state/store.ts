/**
 * @author WMXPY
 * @namespace Scene_Scepter_State
 * @description Store
 */

import { Redux } from "#R^util/redux";
import { Store } from "redux";
import { scepter_commandReducers, scepter_getDefaultCommandStore } from "./command/command";
import { IScepterStore, SCEPTER_ACTIONS } from "./declare";

export const scepter_Store: IScepterStore = {

    command: scepter_getDefaultCommandStore(),
};

export const scepter_getStore = (): Store<IScepterStore> =>
    new Redux<IScepterStore, SCEPTER_ACTIONS>(scepter_Store)
        .reducers(scepter_commandReducers)
        .createStore();
