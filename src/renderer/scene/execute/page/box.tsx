/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE } from '#P/declare';
import { expendDetails, shrinkDetails } from '#R~execute/state/application/application';
import { clearInput, setInput } from '#R~execute/state/buffer/buffer';
import { setCurrent } from '#R~execute/state/current/current';
import { IStore } from '#R~execute/state/declare';
import { hideExecuteWindow } from '#R~execute/util/trigger';
import { MutatedCommandSideEffectFunction } from '#U/declare';
import { Mutate } from '#U/mutate';
import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
import { KEY } from '../../../declare/key';
import { ConnectedProtocol } from './protocol';

export interface IBoxProps {

    readonly current: COMMAND_DECLARE;
    readonly setCurrent: (current: COMMAND_DECLARE) => void;

    readonly input: string;
    readonly clearInput: () => void;
    readonly setInput: (input: string) => void;
}

const mapStateBoxCareAbout = (store: IStore): Partial<IBoxProps> => ({

    current: store.current.current,
    input: store.buffer.input,
});

const mapDispatchBoxCareAbout: any = {

    expendDetails,
    shrinkDetails,

    setCurrent,

    clearInput,
    setInput,
};

export class Box extends React.Component<IBoxProps, {}> {

    public constructor(props: IBoxProps) {

        super(props);

        this._nextState = this._nextState.bind(this);

        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    public componentDidMount(): void {


        (window as any).test = this.props;

        document.addEventListener('keydown', this._handleKeyDown);
        document.addEventListener('keypress', this._handleKeyPress);
    }

    public componentWillUnmount(): void {

        document.removeEventListener('keydown', this._handleKeyDown);
        document.removeEventListener('keypress', this._handleKeyPress);
    }

    public render(): JSX.Element {

        return (<ConnectedProtocol />);
    }

    private _nextState(next: COMMAND_DECLARE): void {

        if (next.type === COMMAND_DECLARE_TYPE.DONE) {

            hideExecuteWindow();
        }

        this.props.setCurrent(next);
    }

    private _handleKeyDown(event: KeyboardEvent): void {

        const input: string = this.props.input;
        const mutate: Mutate = Mutate.declare(this.props.current);

        switch (event.key) {

            case KEY.ENTER: {

                const mutated: MutatedCommandSideEffectFunction = mutate.command(input);
                mutated().then(this._nextState);
                break;
            }
            case KEY.ESCAPE: {

                this.props.clearInput();
                break;
            }
            case KEY.TAB: {

                const mutated: string = mutate.input(input);
                this.props.setInput(mutated);
                break;
            }
            case KEY.BACKSPACE: {

                this.props.setInput(input.substring(0, input.length - 1));
                break;
            }
        }

        return;
    }

    private _handleKeyPress(event: KeyboardEvent): void {

        if (event.key.length === 1) {
            const typeBuffer = this.props.input + event.key;

            this.props.setInput(typeBuffer);
        }

        return;
    }
}

export const ConnectedBox: ConnectedComponentClass<typeof Box, any> = connect(mapStateBoxCareAbout, mapDispatchBoxCareAbout)(Box);
