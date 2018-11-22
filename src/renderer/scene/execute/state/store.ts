/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Store
 */

import { Redux } from "#R^util/redux";
import { Store } from "redux";
import { bufferReducers, getDefaultBufferStore } from './buffer/buffer';
import { currentReducers, getDefaultCurrentStore } from './current/current';
import { EXECUTE_ACTIONS, IStore } from "./declare";

export const ExecuteStore: IStore = {

    buffer: getDefaultBufferStore(),
    current: getDefaultCurrentStore(),
};

export const getStore = (): Store<IStore> =>
    new Redux<IStore, EXECUTE_ACTIONS>(ExecuteStore)
        .reducers(bufferReducers)
        .reducers(currentReducers)
        .createStore();
