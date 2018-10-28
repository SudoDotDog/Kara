/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";
import { mockWindow } from "../../util/window";
import Hello from "./hello";

import '../../style/common/global.sass';

declare const module: any;
mockWindow(window);

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
