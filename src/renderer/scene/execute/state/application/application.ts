/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Application
 * @description Reducer
 */

import { Reducer } from 'redux';
import { EXECUTE_ACTIONS, IExecuteStore } from '../declare';
import { IApplicationStore, ISetExpendReducerAction } from './type';

const reduceExpend: Reducer<IExecuteStore, ISetExpendReducerAction> = (state: IExecuteStore | undefined, action: ISetExpendReducerAction): IExecuteStore => ({

    ...state as IExecuteStore,
    application: {

        expend: action.expend,
    },
});

export const applicationReducers = {

    [EXECUTE_ACTIONS.SET_EXPEND]: reduceExpend,
};

export const expendDetails = (): ISetExpendReducerAction => ({

    type: EXECUTE_ACTIONS.SET_EXPEND,
    expend: true,
});

export const shrinkDetails = (): ISetExpendReducerAction => ({

    type: EXECUTE_ACTIONS.SET_EXPEND,
    expend: false,
});

export const getDefaultApplicationStore = (): IApplicationStore => ({

    expend: false,
});
