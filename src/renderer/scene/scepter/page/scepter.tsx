/**
 * @author WMXPY
 * @namespace Scepter_Center_Page
 * @description Scepter
 */

import { ICommand } from '#P/declare';
import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";
import { connect, ConnectedComponentClass } from 'react-redux';
import { scepter_setCommands, scepter_setCurrent, scepter_setPath } from '../state/command/command';
import { IScepterStore } from '../state/declare';

export interface IScepterScepterProps {

    readonly commands: ICommand[];
    readonly current: ICommand | null;
    readonly path: string[];

    readonly setCommands: (commands: ICommand[]) => void;
    readonly setCurrent: (current: ICommand) => void;
    readonly setPath: (path: string[]) => void;
}

const mapStates = (store: IScepterStore): Partial<IScepterScepterProps> => ({

    commands: store.command.commands,
    current: store.command.current,
    path: store.command.path,
});

const mapDispatches: Partial<IScepterScepterProps> = {

    setCommands: scepter_setCommands,
    setCurrent: scepter_setCurrent,
    setPath: scepter_setPath,
};

export class Scepter$Scepter extends React.Component<{}, {}> {

    public constructor(props: {}) {

        super(props);
    }

    public componentDidMount(): void {

        console.log(this.props);
    }

    public render(): JSX.Element {

        return (
            <div className={styleScepter.wrapper}>
                <div className={styleScepter.nav}>

                </div>

                <div className={styleScepter.contents}>

                    <div className={styleScepter.menu}>Save</div>
                    <div className={styleScepter.breadcrumb}>1 > 2 > 3</div>
                    <div className={styleScepter.query}>{JSON.stringify(this.props)}</div>
                </div>
            </div>
        );
    }
}

export const Scepter$ConnectedScepter: ConnectedComponentClass<typeof Scepter$Scepter, any> =
    connect(mapStates, mapDispatches as any)(Scepter$Scepter);
