/**
 * @author WMXPY
 * @namespace Scene_Scepter
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";

import Hello from "./hello";

declare const module: any;

window.ondragover = (e) => {
    e.preventDefault();
    return false;
};

window.ondrop = (e) => {
    e.preventDefault();
    return false;
};

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render(
        <AppContainer>
            <HashRouter>
                <App />
            </HashRouter>
        </AppContainer>,
        document.getElementById("container"));
};

render(Hello);
if (module.hot) {

    module.hot.accept("./hello", () => {
        render(require("./hello").default);
    });
}
