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

export interface IProps {
    counter: number;
    setCounter: (number: number) => any;
}

export interface IState {

    fullSized: boolean;
}


const mapStateBoxCareAbout = (store: IStore): Partial<IProps> => ({
    counter: store.box.counter,
});

const mapDispatchBoxCareAbout: Partial<IProps> = {
    setCounter,
};

@(connect(mapStateBoxCareAbout, mapDispatchBoxCareAbout) as any)
export class Box extends React.Component<IProps, IState> {

    public readonly state = {

        fullSized: false,
    };

    public constructor(props: IProps) {

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
