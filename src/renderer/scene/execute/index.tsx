/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Index
 */

import { initProvider } from '#P/init';
import '#R^style/common/global.sass';
import { mockWindow } from '#R^util/window';
import Hello from '#R~execute/hello';
import { getStore } from '#R~execute/state/store';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { initRendererSceneExecuteErrorDictionary } from './declare/error';

declare const module: any;
mockWindow(window);
initRendererSceneExecuteErrorDictionary();
initProvider();

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
