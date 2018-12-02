/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Store
 */

import { Redux } from "#R^util/redux";
import { Store } from "redux";
import { applicationReducers, getDefaultApplicationStore } from "./application/application";
import { bufferReducers, getDefaultBufferStore } from './buffer/buffer';
import { currentReducers, getDefaultCurrentStore } from './current/current';
import { EXECUTE_ACTIONS, IExecuteStore } from "./declare";

export const ExecuteStore: IExecuteStore = {

    application: getDefaultApplicationStore(),
    buffer: getDefaultBufferStore(),
    current: getDefaultCurrentStore(),
};

export const getStore = (): Store<IExecuteStore> =>
    new Redux<IExecuteStore, EXECUTE_ACTIONS>(ExecuteStore)
        .reducers(applicationReducers)
        .reducers(bufferReducers)
        .reducers(currentReducers)
        .createStore();
