/**
 * @author WMXPY
 * @namespace Scene_Execute_Store
 * @description Reducer
 */

import { combineReducers } from "redux";
import { boxReducer } from '../state/box';

export const getReducer = () => combineReducers({
    box: boxReducer,
});
