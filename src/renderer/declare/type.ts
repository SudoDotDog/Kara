/**
 * @author WMXPY
 * @namespace Declare
 * @description Type
 */

import { Action, Dispatch } from "redux";

export type Partial<T> = {
    [P in keyof T]?: T[P];
};

export type DispatchCreator<A extends Action> = (dispatch: Dispatch<A>) => void;
