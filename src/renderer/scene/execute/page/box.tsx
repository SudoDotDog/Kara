/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import * as React from "react";
import { connect } from "react-redux";
import * as styleExecute from '../../../style/scene/execute/page/execute.sass';
import { setCounter } from "../state/box";
import { IStore } from "../state/store";

export interface IBoxProps {
    counter: number;
    setCounter: (number: number) => any;
}

export interface IBoxState {

    fullSized: boolean;
}


const mapStateBoxCareAbout = (store: IStore): Partial<IBoxProps> => ({
    counter: store.box.counter,
});

const mapDispatchBoxCareAbout: any = {
    setCounter,
};

export class Box extends React.Component<IBoxProps, IBoxState> {

    public readonly state = {

        fullSized: false,
    };

    public constructor(props: IBoxProps) {

        super(props);
    }

    public componentDidMount() {

        setImmediate(() => this.setState({
            fullSized: true,
        }));
    }

    public render(): JSX.Element {

        return (
            <div className={styleExecute.title}>
                <div className={styleExecute.titleLeft}>
                    <div></div>
                </div>
                <div className={[
                    styleExecute.titleRight,
                    this.state.fullSized && styleExecute.titleRightFullSize,
                ].join(' ')}>
                    <div>{this.props.counter}</div>
                    <button onClick={this.props.setCounter.bind(this, this.props.counter + 1)}>+</button>
                </div>
            </div>
        );
    }
}

export const ConnectedBox = connect(mapStateBoxCareAbout, mapDispatchBoxCareAbout)(Box);
