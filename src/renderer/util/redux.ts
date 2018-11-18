/**
 * @author WMXPY
 * @namespace Renderer_Util
 * @description Redux
 */

import { AnyAction, createStore, Store } from "redux";

export class Redux<TStore, TAction> {

    private _initStore: TStore;
    private _reducerMap: Map<TAction, (current: TStore, action: any) => TStore>;

    public constructor(initStore: TStore) {

        this._initStore = initStore;
        this._reducerMap = new Map<TAction, (current: TStore, action: any) => TStore>();
    }

    public createStore(): Store<TStore> {

        return createStore(this._reducer.bind(this));
    }

    public reducer(action: TAction, reducer: ((current: TStore, reducer: any) => TStore)): Redux<TStore, TAction> {

        this._reducerMap.set(action, reducer);
        return this;
    }

    public reducers(actions: {
        [action: string]: (current: TStore, reducer: any) => TStore;
    }): Redux<TStore, TAction> {

        Object.entries(actions).forEach(([action, reducer]) => {
            this.reducer(action as any as TAction, reducer);
        });
        return this;
    }

    private _reducer<TReducer extends AnyAction>(current: TStore, action: TReducer) {

        if (this._reducerMap.has(action.type)) {

            const reducer: (current: TStore, reducer: AnyAction) => TStore = this._reducerMap.get(action.type) as (current: TStore, reducer: AnyAction) => TStore;
            const result: TStore = reducer(current, action);
            return result;
        }
        return this._initStore;
    }
}
