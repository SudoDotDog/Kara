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
import { Store } from "redux";
import '../../style/common/global.sass';
import { mockWindow } from "../../util/window";
import Hello from "./hello";
import { getStore, IStore } from "./state/store";

declare const module: any;
mockWindow(window);

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render(
        (<Provider store={getStore()}>
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
