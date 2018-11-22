/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE, ICommand } from '#P/declare';
import { Provider } from '#P/renderer';
import { createCommandCommandDeclare } from '#P/util/declare';
import { setCurrent } from '#R~execute/state/current/current';
import { IStore } from '#R~execute/state/declare';
import { ExecuteResizer } from '#R~execute/util/resizer';
import { hideExecuteWindow } from '#R~execute/util/trigger';
import * as React from "react";
import { connect } from "react-redux";
import { KEY } from '../../../declare/key';
import { Protocol } from './protocol';

export interface IBoxProps {

    readonly current: COMMAND_DECLARE;
    readonly setCurrent: (current: COMMAND_DECLARE) => void;
}

interface IBoxState {

    readonly typeBuffer: string;
}

const mapStateBoxCareAbout = (store: IStore): Partial<IBoxProps> => ({

    current: store.current.current,
});

const mapDispatchBoxCareAbout: any = {

    setCurrent,
};

export class Box extends React.Component<IBoxProps, IBoxState> {

    public readonly state: IBoxState = {

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
            current={this.props.current}
            typeBuffer={this.state.typeBuffer}
        />);
    }

    private _nextState(next: COMMAND_DECLARE): void {

        if (next.type === COMMAND_DECLARE_TYPE.DONE) {

            hideExecuteWindow();
        }

        this.props.setCurrent(next);
        console.log(next);
    }

    private _handleKeyDown(event: KeyboardEvent): void {

        const provider: Provider = Provider.instance;
        const typeBuffer: string = this.state.typeBuffer;

        const setTypeBuffer = (newTypeBuffer: string) => this.setState({ typeBuffer: newTypeBuffer });

        switch (event.key) {

            case KEY.ENTER: {

                const matched: ICommand | null = provider.match(typeBuffer);
                if (matched) {

                    provider.execute(matched.declare).then(this._nextState);
                }
                break;
            }
            case KEY.ESCAPE: {

                setTypeBuffer('');
                break;
            }
            case KEY.TAB: {

                const nearest: ICommand | null = provider.nearest(typeBuffer);
                if (nearest) setTypeBuffer(nearest.command);
                break;
            }
            case KEY.BACKSPACE: {

                setTypeBuffer(typeBuffer.substring(0, typeBuffer.length - 1));
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
