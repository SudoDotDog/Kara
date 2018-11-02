/**
 * @author WMXPY
 * @namespace Declare
 * @description Type
 */

import { Action, Dispatch } from "redux";

export type DispatchCreator<A extends Action> = (dispatch: Dispatch<A>) => void;
