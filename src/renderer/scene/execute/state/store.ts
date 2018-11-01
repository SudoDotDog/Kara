/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Store
 */

import { Redux } from "#R^util/redux";
import { Store } from "redux";
import { boxReducers, getDefaultBoxStore } from './box/box';
import { EXECUTE_ACTIONS, IStore } from "./declare";

export const getStore = (): Store<IStore> =>
    new Redux<IStore, EXECUTE_ACTIONS>(ExecuteStore)
        .reducers(boxReducers)
        .createStore();

export const ExecuteStore: IStore = {

    box: getDefaultBoxStore(),
};
