/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description AutoHorizontalExpend
 */

import { StyleBuilder } from "#R^util/style";
import * as styleExecute from '#S/scene/execute/execute.sass';
import * as React from "react";

export interface IAutoHorizontalExpendProps {

    children: JSX.Element;

    className?: string;
    expend?: boolean;
}

interface IAutoHorizontalExpendState {

    horizontalFullSized: boolean;
}

export class AutoHorizontalExpend extends React.Component<IAutoHorizontalExpendProps, IAutoHorizontalExpendState> {

    public readonly state: IAutoHorizontalExpendState = {

        horizontalFullSized: false,
    };

    public componentDidMount(): void {

        setImmediate(() => this.setState({
            horizontalFullSized: true,
        }));
    }

    public render(): JSX.Element {

        return (
            <div className={StyleBuilder
                .init(this.props.className)
                .add(styleExecute.expendable)
                .if(this.state.horizontalFullSized, styleExecute.fullSized)
                .build()}>

                {this.props.children}
            </div>
        );
    }
}
