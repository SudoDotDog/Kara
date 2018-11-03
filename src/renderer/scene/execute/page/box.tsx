/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import { ICommand } from '#P/declare';
import { initProvider } from '#P/init';
import { Provider } from '#P/provider';
import * as styleExecute from '#R^style/scene/execute/page/execute.sass';
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

        initProvider();

        this._renderNearest = this._renderNearest.bind(this);

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
                    <div>{this.state.current}</div>
                    {this._renderNearest()}
                </div>
            </div>
        );
    }

    private _renderNearest(): JSX.Element | undefined {

        const provider: Provider = Provider.instance;
        const nearest: ICommand | null = provider.nearest(this.state.current);

        if (nearest) {
            return (<div>Press Enter for "{nearest.command}"</div>);
        }
        return undefined;
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
