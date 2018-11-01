/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Box
 * @description Reducer
 */

import { Reducer } from 'redux';
import { EXECUTE_ACTIONS, IStore } from '../declare';
import { IBoxStore, ICounterReducerAction } from './type';

const reduceCounter: Reducer<IStore, ICounterReducerAction> = (state: IStore | undefined, action: ICounterReducerAction): IStore => ({

    ...state as IStore,
    box: {
        counter: action.number,
    },
});

export const boxReducers = {
    [EXECUTE_ACTIONS.COUNTER]: reduceCounter,
};

export const setCounter = (number: number): ICounterReducerAction => {
    return {
        type: EXECUTE_ACTIONS.COUNTER,
        number,
    };
};

export const getDefaultBoxStore = (): IBoxStore => {

    return {
        counter: 0,
    };
};
