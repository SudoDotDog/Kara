/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Current
 * @description Reducer
 */

import { COMMAND_DECLARE } from '#P/declare';
import { createCommandCommandDeclare } from '#P/util/declare';
import { Reducer } from 'redux';
import { EXECUTE_ACTIONS, IStore } from '../declare';
import { ICommandReducerAction, ICurrentReducerAction, ICurrentStore } from './type';

const reduceCommand: Reducer<IStore, ICommandReducerAction> = (state: IStore | undefined, action: ICommandReducerAction): IStore => ({

    ...state as IStore,
    current: {

        ...(state as IStore).current,
        command: action.command,
    },
});

const reduceCurrent: Reducer<IStore, ICurrentReducerAction> = (state: IStore | undefined, action: ICurrentReducerAction): IStore => ({

    ...state as IStore,
    current: {

        ...(state as IStore).current,
        current: action.current,
    },
});

export const currentReducers = {

    [EXECUTE_ACTIONS.SET_COMMAND]: reduceCommand,
    [EXECUTE_ACTIONS.SET_CURRENT]: reduceCurrent,
};

export const setCommand = (command: string): ICommandReducerAction => ({

    type: EXECUTE_ACTIONS.SET_COMMAND,
    command,
});

export const setCurrent = (current: COMMAND_DECLARE): ICurrentReducerAction => ({

    type: EXECUTE_ACTIONS.SET_CURRENT,
    current,
});

export const getDefaultCurrentStore = (): ICurrentStore => ({

    command: null,
    current: createCommandCommandDeclare(),
});
