/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Box
 * @description Reducer
 */

import { Action, Reducer } from 'redux';
import { EXECUTE_ACTIONS, IStore } from './store';

// Store
export interface IBoxStore {

    readonly counter: number;
}

export interface ICounterReducerAction extends Action<EXECUTE_ACTIONS> {
    number: number;
}

// Reducer
const reduceCounter: Reducer<IStore, ICounterReducerAction> = (state: IStore | undefined, action: ICounterReducerAction): IStore => ({

    ...state as IStore,
    box: {
        counter: action.number,
    },
});

export const boxReducers = {
    [EXECUTE_ACTIONS.COUNTER]: reduceCounter,
};

// Action
export const setCounter = (number: number): ICounterReducerAction => {
    return {
        type: EXECUTE_ACTIONS.COUNTER,
        number,
    };
};
