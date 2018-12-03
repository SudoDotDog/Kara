/**
 * @author WMXPY
 * @namespace Scene_Scepter
 * @description Hello
 */

import * as React from "react";
import { Route } from "react-router-dom";
import { Scepter$Scepter } from "./page/scepter";

class Hello extends React.Component<{}, {}> {

    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Route path="/" exact component={Scepter$Scepter} />
            </React.Fragment>
        );
    }
}

export default Hello;
