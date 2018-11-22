/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Box
 * @description Reducer
 */

import { COMMAND_DECLARE } from '#P/declare';
import { createCommandCommandDeclare } from '#P/util/declare';
import { Reducer } from 'redux';
import { EXECUTE_ACTIONS, IStore } from '../declare';
import { ICurrentReducerAction, ICurrentStore } from './type';

const reduceCounter: Reducer<IStore, ICurrentReducerAction> = (state: IStore | undefined, action: ICurrentReducerAction): IStore => ({

    ...state as IStore,
    current: {

        current: action.current,
    },
});

export const currentReducers = {

    [EXECUTE_ACTIONS.COUNTER]: reduceCounter,
};

export const setCurrent = (current: COMMAND_DECLARE): ICurrentReducerAction => {

    return {
        type: EXECUTE_ACTIONS.COUNTER,
        current,
    };
};

export const getDefaultCurrentStore = (): ICurrentStore => {

    return {
        current: createCommandCommandDeclare(),
    };
};
