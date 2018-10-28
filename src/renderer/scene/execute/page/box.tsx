/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import * as React from "react";
import * as styles from '../../../style/global.sass';

export interface IProps {

}

export class Box extends React.Component<IProps, {}> {

    public constructor(props: IProps) {
        console.log(styles);
        console.log(styles.abb);
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
