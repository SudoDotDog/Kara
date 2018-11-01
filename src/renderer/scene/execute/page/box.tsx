/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import * as styleExecute from '#R^style/scene/execute/page/execute.sass';
import { setCounter } from '#R~execute/state/box/box';
import { IStore } from '#R~execute/state/declare';
import * as React from "react";
import { connect } from "react-redux";

export interface IBoxProps {

    counter: number;
    setCounter: (number: number) => any;
}

export interface IBoxState {

    typed: string;
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

        typed: '',
        fullSized: false,
    };

    public constructor(props: IBoxProps) {

        super(props);
    }

    public componentDidMount() {

        // document.addEventListener('keydown', this._handleKeyDown.bind(this));
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
                </div>
            </div>
        );
    }

    // private _handleKeyDown(event: KeyboardEvent) {

    //     const typed = this.state.typed + event.key;
    //     this.setState({
    //         typed,
    //     });
    //     return;
    // }
}

export const ConnectedBox = connect(mapStateBoxCareAbout, mapDispatchBoxCareAbout)(Box);
