/**
 * @author WMXPY
 * @namespace Scene_Scepter_State_Command
 * @description Reducer
 */

import { ICommand } from '#P/declare';
import { Reducer } from 'redux';
import { IScepterStore, SCEPTER_ACTIONS } from '../declare';
import { IScepterCommandStore, IScepterSetCommandsReducerAction, IScepterSetCurrentReducerAction, IScepterSetPathReducerAction } from './type';

const reduceScepterSetCommand: Reducer<IScepterStore, IScepterSetCommandsReducerAction> = (state: IScepterStore | undefined, action: IScepterSetCommandsReducerAction): IScepterStore => ({

    ...state as IScepterStore,
    command: {

        ...(state as IScepterStore).command,
        commands: action.commands,
    },
});

const reduceScepterSetCurrent: Reducer<IScepterStore, IScepterSetCurrentReducerAction> = (state: IScepterStore | undefined, action: IScepterSetCurrentReducerAction): IScepterStore => ({

    ...state as IScepterStore,
    command: {

        ...(state as IScepterStore).command,
        current: action.current,
    },
});

const reduceScepterSetPath: Reducer<IScepterStore, IScepterSetPathReducerAction> = (state: IScepterStore | undefined, action: IScepterSetPathReducerAction): IScepterStore => ({

    ...state as IScepterStore,
    command: {

        ...(state as IScepterStore).command,
        path: action.path,
    },
});

export const scepter_commandReducers = {

    [SCEPTER_ACTIONS.SET_COMMANDS]: reduceScepterSetCommand,
    [SCEPTER_ACTIONS.SET_CURRENT]: reduceScepterSetCurrent,
    [SCEPTER_ACTIONS.SET_PATH]: reduceScepterSetPath,
};

export const scepter_setCommands = (commands: ICommand[]): IScepterSetCommandsReducerAction => ({

    type: SCEPTER_ACTIONS.SET_COMMANDS,
    commands,
});

export const scepter_setCurrent = (current: ICommand): IScepterSetCurrentReducerAction => ({

    type: SCEPTER_ACTIONS.SET_CURRENT,
    current,
});

export const scepter_setPath = (path: string[]): IScepterSetPathReducerAction => ({

    type: SCEPTER_ACTIONS.SET_PATH,
    path,
});

export const scepter_getDefaultCommandStore = (): IScepterCommandStore => ({

    commands: [],
    current: null,
    path: [],
});
