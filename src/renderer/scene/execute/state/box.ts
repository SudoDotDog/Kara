/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Box
 * @description Reducer
 */

import { Action, Dispatch, Reducer } from 'redux';
import { EXECUTE_ACTIONS } from '../store/actions';
import { IStore } from '../store/store';

export interface ICounterReducerAction extends Action<EXECUTE_ACTIONS> {
    number: number;
}

const reduceCounter: Reducer<IStore, ICounterReducerAction> = (state: IStore | undefined, action: ICounterReducerAction): IStore => ({

    ...state as IStore,
    box: {
        counter: action.number,
    },
});

export const setCounter = (number: number) => (dispatch: Dispatch<ICounterReducerAction>) => {

    dispatch({
        type: EXECUTE_ACTIONS.COUNTER,
        number,
    });
};

const Actions = {
    [EXECUTE_ACTIONS.COUNTER]: reduceCounter,
};

export const boxReducer: Reducer<any, any> = (store: IBoxStore = getInitBoxStore(), action: Action<EXECUTE_ACTIONS>): IStore => {

    const reducer: Reducer<any, any> | undefined = Actions[action.type];
    console.log(action, reducer);
    return reducer ? reducer(store, action) : store;
};

export interface IBoxStore {

    readonly counter: number;
}

export const getInitBoxStore: () => IBoxStore = () => ({

    counter: 0,
});
