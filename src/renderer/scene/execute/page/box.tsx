/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE, ICommand } from '#P/declare';
import { Provider } from '#P/renderer';
import { createCommandCommandDeclare } from '#P/util/declare';
import { setCounter } from '#R~execute/state/box/box';
import { IStore } from '#R~execute/state/declare';
import { ExecuteResizer } from '#R~execute/util/resizer';
import * as React from "react";
import { connect } from "react-redux";
import { KEY } from '../../../declare/key';
import { Protocol } from './protocol';

export interface IBoxProps {

    readonly counter: number;
    readonly setCounter: (number: number) => any;
}

interface IBoxState {

    readonly current: COMMAND_DECLARE;
    readonly typeBuffer: string;
}

const mapStateBoxCareAbout = (store: IStore): Partial<IBoxProps> => ({

    counter: store.box.counter,
});

const mapDispatchBoxCareAbout: any = {

    setCounter,
};

export class Box extends React.Component<IBoxProps, IBoxState> {

    public readonly state: IBoxState = {

        current: createCommandCommandDeclare(),
        typeBuffer: '',
    };

    public constructor(props: IBoxProps) {

        super(props);

        this._nextState = this._nextState.bind(this);

        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    public componentDidMount(): void {

        (window as any).test = ExecuteResizer;

        document.addEventListener('keydown', this._handleKeyDown);
        document.addEventListener('keypress', this._handleKeyPress);
    }

    public componentWillUnmount(): void {

        document.removeEventListener('keydown', this._handleKeyDown);
        document.removeEventListener('keypress', this._handleKeyPress);
    }

    public render(): JSX.Element {

        return (<Protocol
            current={this.state.current}
            typeBuffer={this.state.typeBuffer}
        />);
    }

    private _nextState(next: COMMAND_DECLARE): void {

        if (next.type === COMMAND_DECLARE_TYPE.DONE) {

            console.log('DONE');
        }

        this.setState({
            current: next,
        });
    }

    private _handleKeyDown(event: KeyboardEvent): void {

        const provider: Provider = Provider.instance;
        const typeBuffer: string = this.state.typeBuffer;

        const setCurrent = (newTypeBuffer: string) => this.setState({ typeBuffer: newTypeBuffer });

        switch (event.key) {

            case KEY.ENTER: {

                const matched: ICommand | null = provider.match(typeBuffer);
                if (matched) {

                    provider.execute(matched.declare).then(this._nextState);
                }
                break;
            }
            case KEY.ESCAPE: {

                setCurrent('');
                break;
            }
            case KEY.TAB: {

                const nearest: ICommand | null = provider.nearest(typeBuffer);
                if (nearest) setCurrent(nearest.command);
                break;
            }
            case KEY.BACKSPACE: {

                setCurrent(typeBuffer.substring(0, typeBuffer.length - 1));
                break;
            }
        }

        return;
    }

    private _handleKeyPress(event: KeyboardEvent): void {

        if (event.key.length === 1) {
            const typeBuffer = this.state.typeBuffer + event.key;

            this.setState({
                typeBuffer,
            });
        }

        return;
    }
}

export const ConnectedBox = connect(mapStateBoxCareAbout, mapDispatchBoxCareAbout)(Box);
