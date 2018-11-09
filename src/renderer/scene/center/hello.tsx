/**
 * @author WMXPY
 * @namespace Scene_Center
 * @description Hello
 */

import * as React from "react";
import { Route } from "react-router-dom";

class Hello extends React.Component<{}, {}> {

    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Route path="/" exact component={() => <div>123</div>} />
            </React.Fragment>
        );
    }
}

export default Hello;
