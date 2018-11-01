import { IBoxStore } from "./box/type";

export interface IStore {

    readonly box: IBoxStore;
}

export enum EXECUTE_ACTIONS {

    COUNTER = 'COUNTER',
}
