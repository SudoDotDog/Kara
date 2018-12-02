/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Buffer
 * @description Reducer
 */

import { Reducer } from 'redux';
import { EXECUTE_ACTIONS, IExecuteStore } from '../declare';
import { IBufferStore, ISetInputReducerAction } from './type';

const reduceSetInput: Reducer<IExecuteStore, ISetInputReducerAction> = (state: IExecuteStore | undefined, action: ISetInputReducerAction): IExecuteStore => ({

    ...state as IExecuteStore,
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
