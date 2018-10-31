/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Hello
 */

import { ConnectedBox } from "#R~execute/page/box";
import * as React from "react";
import { Route } from "react-router-dom";

class Hello extends React.Component<{}, {}> {

    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Route path="/" exact component={ConnectedBox} />
            </React.Fragment>
        );
    }
}

export default Hello;
