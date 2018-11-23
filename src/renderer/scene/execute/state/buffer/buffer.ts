/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Buffer
 * @description Reducer
 */

import { Reducer } from 'redux';
import { EXECUTE_ACTIONS, IStore } from '../declare';
import { IBufferStore, ISetInputReducerAction } from './type';

const reduceSetInput: Reducer<IStore, ISetInputReducerAction> = (state: IStore | undefined, action: ISetInputReducerAction): IStore => ({

    ...state as IStore,
    buffer: {

        input: action.input,
    },
});

export const bufferReducers = {

    [EXECUTE_ACTIONS.SET_INPUT]: reduceSetInput,
};

export const setInput = (input: string): ISetInputReducerAction => ({

    type: EXECUTE_ACTIONS.SET_INPUT,
    input,
});

export const clearInput = (): ISetInputReducerAction => ({

    type: EXECUTE_ACTIONS.SET_INPUT,
    input: '',
});

export const getDefaultBufferStore = (): IBufferStore => ({

    input: '',
});
