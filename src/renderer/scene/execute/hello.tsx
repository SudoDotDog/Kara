/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Hello
 */

import * as React from "react";
import { Route } from "react-router-dom";
import { Box } from "./page/box";

class Hello extends React.Component<{}, {}> {

    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Route path="/" exact component={Box} />
            </React.Fragment>
        );
    }
}

export default Hello;
