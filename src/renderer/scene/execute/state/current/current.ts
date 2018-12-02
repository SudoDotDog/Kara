/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Current
 * @description Reducer
 */

import { COMMAND_DECLARE } from '#P/declare';
import { createCommandCommandDeclare } from '#P/util/declare';
import { Reducer } from 'redux';
import { EXECUTE_ACTIONS, IExecuteStore } from '../declare';
import { ICommandReducerAction, ICurrentReducerAction, ICurrentStore } from './type';

const reduceCommand: Reducer<IExecuteStore, ICommandReducerAction> = (state: IExecuteStore | undefined, action: ICommandReducerAction): IExecuteStore => ({

    ...state as IExecuteStore,
    current: {

        ...(state as IExecuteStore).current,
        command: action.command,
    },
});

const reduceCurrent: Reducer<IExecuteStore, ICurrentReducerAction> = (state: IExecuteStore | undefined, action: ICurrentReducerAction): IExecuteStore => ({

    ...state as IExecuteStore,
    current: {

        ...(state as IExecuteStore).current,
        current: action.current,
    },
});

export const currentReducers = {

    [EXECUTE_ACTIONS.SET_COMMAND]: reduceCommand,
    [EXECUTE_ACTIONS.SET_CURRENT]: reduceCurrent,
};

export const execute_setCommand = (command: string): ICommandReducerAction => ({

    type: EXECUTE_ACTIONS.SET_COMMAND,
    command,
});

export const execute_setCurrent = (current: COMMAND_DECLARE): ICurrentReducerAction => ({

    type: EXECUTE_ACTIONS.SET_CURRENT,
    current,
});

export const getDefaultCurrentStore = (): ICurrentStore => ({

    command: null,
    current: createCommandCommandDeclare(),
});
