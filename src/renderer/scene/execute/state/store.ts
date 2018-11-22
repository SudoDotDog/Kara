/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Store
 */

import { Redux } from "#R^util/redux";
import { Store } from "redux";
import { currentReducers, getDefaultCurrentStore } from './current/current';
import { EXECUTE_ACTIONS, IStore } from "./declare";

export const getStore = (): Store<IStore> =>
    new Redux<IStore, EXECUTE_ACTIONS>(ExecuteStore)
        .reducers(currentReducers)
        .createStore();

export const ExecuteStore: IStore = {

    current: getDefaultCurrentStore(),
};
