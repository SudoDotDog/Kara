/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Expendable
 */

import { StyleBuilder } from "#R^util/style";
import * as styleExecute from '#S/scene/execute/execute.sass';
import * as React from "react";

export interface IVerticalExpendableProps {

    children: JSX.Element;

    className?: string;
    expend?: boolean;
}

export const VerticalExpendable: React.SFC<IVerticalExpendableProps> = (props: IVerticalExpendableProps): JSX.Element => {
    console.log(props);
    return (<div
        className={StyleBuilder
            .init(props.className)
            .add(styleExecute.verticalExpendable)
            .if(props.expend, styleExecute.fullSized)
            .build()}
    >

        {props.children}
    </div>);
};
