/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import * as styleExecute from '#R^style/scene/execute/execute.sass';
import { Panel } from '#R~execute/components/panel';
import { setCounter } from '#R~execute/state/box/box';
import { IStore } from '#R~execute/state/declare';
import * as React from "react";
import { connect } from "react-redux";

export interface IBoxProps {

    readonly counter: number;
    readonly setCounter: (number: number) => any;
}

export interface IBoxState {

    readonly current: string;
    readonly fullSized: boolean;
}

const mapStateBoxCareAbout = (store: IStore): Partial<IBoxProps> => ({

    counter: store.box.counter,
});

const mapDispatchBoxCareAbout: any = {

    setCounter,
};

export class Box extends React.Component<IBoxProps, IBoxState> {

    public readonly state = {

        current: '',
        fullSized: false,
    };

    public constructor(props: IBoxProps) {

        super(props);

        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    public componentDidMount(): void {

        document.addEventListener('keydown', this._handleKeyDown);
        document.addEventListener('keypress', this._handleKeyPress);
        setImmediate(() => this.setState({
            fullSized: true,
        }));
    }

    public componentWillUnmount(): void {

        document.removeEventListener('keydown', this._handleKeyDown);
        document.addEventListener('keypress', this._handleKeyPress);
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
                    <Panel current={this.state.current} />
                </div>
            </div>
        );
    }

    private _handleKeyDown(event: KeyboardEvent): void {

        if (event.key === 'Escape') {
            this.setState({
                current: '',
            });
        }
        return;
    }

    private _handleKeyPress(event: KeyboardEvent): void {

        const current = this.state.current + event.key;

        this.setState({
            current,
        });
        return;
    }
}

export const ConnectedBox = connect(mapStateBoxCareAbout, mapDispatchBoxCareAbout)(Box);
