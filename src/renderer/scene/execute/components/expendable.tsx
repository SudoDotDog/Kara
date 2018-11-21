/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Expendable
 */

import { StyleBuilder } from "#R^util/style";
import * as styleExecute from '#S/scene/execute/execute.sass';
import * as React from "react";

interface IExpendableProps {

    children: JSX.Element;

    className?: string;
    expend?: boolean;
}

interface IExpendableState {

    horizontalFullSized: boolean;
}

export class Expendable extends React.Component<IExpendableProps, IExpendableState> {

    public readonly state: IExpendableState = {

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
