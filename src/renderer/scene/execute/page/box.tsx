/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import { ICommand } from '#P/declare';
import { Provider } from '#P/renderer';
import * as styleExecute from '#R^style/scene/execute/execute.sass';
import { Panel } from '#R~execute/components/panel';
import { setCounter } from '#R~execute/state/box/box';
import { IStore } from '#R~execute/state/declare';
import * as React from "react";
import { connect } from "react-redux";
import { KEY } from '../../../declare/key';

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

        const provider: Provider = Provider.instance;
        const current: string = this.state.current;

        const setCurrent = (newCurrent: string) => this.setState({ current: newCurrent });

        switch (event.key) {
            case KEY.ENTER:
                const matched: ICommand | null = provider.match(current);
                if (matched) {

                    provider.execute(matched.declare).then(console.log);
                }
                break;
            case KEY.ESCAPE:
                setCurrent('');
                break;
            case KEY.TAB:
                const nearest: ICommand | null = provider.nearest(current);
                if (nearest) setCurrent(nearest.command);
                break;
            case KEY.BACKSPACE:
                setCurrent(current.substring(0, current.length - 1));
                break;
        }

        return;
    }

    private _handleKeyPress(event: KeyboardEvent): void {

        if (event.key.length === 1) {
            const current = this.state.current + event.key;

            this.setState({
                current,
            });
        }

        return;
    }
}

export const ConnectedBox = connect(mapStateBoxCareAbout, mapDispatchBoxCareAbout)(Box);
