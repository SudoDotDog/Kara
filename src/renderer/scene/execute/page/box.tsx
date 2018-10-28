/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import * as React from "react";
import * as styleExecute from '../../../style/scene/execute/execute.sass';

export class Box extends React.Component<{}, {}> {

    public constructor(props: {}) {
        super(props);
    }

    public render(): any {
        return (
            <div className={styleExecute.title}>
                <div></div>
                <div>123</div>
            </div>
        );
    }
}
