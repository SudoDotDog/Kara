/**
 * @author WMXPY
 * @namespace Scene_Scepter
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { mockWindow } from "../../util/window";
import Hello from "./hello";
import { Scepter$ConnectedInit } from "./init";
import { scepter_getStore } from "./state/store";

declare const module: any;
mockWindow(window);

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render(
        (<Provider store={scepter_getStore()}>
            <AppContainer>
                <Scepter$ConnectedInit>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </Scepter$ConnectedInit>
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
