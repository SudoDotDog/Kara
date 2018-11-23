/**
 * @author WMXPY
 * @namespace Scene_Execute_State_Application
 * @description Reducer
 */

import { Reducer } from 'redux';
import { EXECUTE_ACTIONS, IStore } from '../declare';
import { IApplicationStore, ISetExpendReducerAction } from './type';

const reduceExpend: Reducer<IStore, ISetExpendReducerAction> = (state: IStore | undefined, action: ISetExpendReducerAction): IStore => ({

    ...state as IStore,
    application: {

        expend: action.expend,
    },
});

export const applicationReducers = {

    [EXECUTE_ACTIONS.SET_EXPEND]: reduceExpend,
};

export const expendDetails = (): ISetExpendReducerAction => {

    return {
        type: EXECUTE_ACTIONS.SET_EXPEND,
        expend: true,
    };
};

export const shrinkDetails = (): ISetExpendReducerAction => {

    return {

        type: EXECUTE_ACTIONS.SET_EXPEND,
        expend: false,
    };
};

export const getDefaultApplicationStore = (): IApplicationStore => {

    return {

        expend: false,
    };
};
