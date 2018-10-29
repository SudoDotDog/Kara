/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { createStore, Store } from "redux";
import '../../style/common/global.sass';
import { mockWindow } from "../../util/window";
import Hello from "./hello";
import { getReducer } from "./store/reducer";
import { IStore } from "./store/store";

declare const module: any;
mockWindow(window);

const store: Store<IStore> = createStore(getReducer());

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render(
        (<Provider store={store}>
            <AppContainer>
                <HashRouter>
                    <App />
                </HashRouter>
            </AppContainer>
        </Provider>),
        document.getElementById("container"));
};

render(Hello);
if (module.hot) {

    module.hot.accept("./hello", () => {
        render(require("./hello").default);
    });
}
