/**
 * @author WMXPY
 * @namespace Scene_Execute_State
 * @description Store
 */

import { Redux } from "#R^util/redux";
import { Store } from "redux";
import { boxReducers, IBoxStore } from './box';

export enum EXECUTE_ACTIONS {

    COUNTER = 'COUNTER',
}

export const getStore = (): Store<IStore> =>
    new Redux<IStore, EXECUTE_ACTIONS>(ExecuteStore)
        .reducers(boxReducers)
        .createStore();

export interface IStore {

    readonly box: IBoxStore;
}

export const ExecuteStore: IStore = {

    box: {
        counter: 0,
    },
};
