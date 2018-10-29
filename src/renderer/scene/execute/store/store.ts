/**
 * @author WMXPY
 * @namespace Scene_Execute_Store
 * @description Store
 */

import { getInitBoxStore, IBoxStore } from "../state/box";

export interface IStore {

    readonly box: IBoxStore;
}

export const Store: IStore = {

    box: getInitBoxStore(),
};

