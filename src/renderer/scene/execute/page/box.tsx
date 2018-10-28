/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import * as React from "react";
import * as styles from '../../../style/scene/execute.sass';

export class Box extends React.Component<{}, {}> {

    public constructor(props: {}) {
        console.log(styles);
        super(props);
    }

    public render(): any {
        return (
            <div>
                <div></div>
                <div>123</div>
            </div>
        );
    }
}
