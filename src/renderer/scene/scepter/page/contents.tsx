/**
 * @author WMXPY
 * @namespace Scene_Scepter_Page
 * @description Contents
 */

import { ICommand } from '#P/declare';
import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";
import { connect, ConnectedComponentClass } from 'react-redux';
import { scepter_setCommands, scepter_setCurrent, scepter_setPath } from '../state/command/command';
import { IScepterStore } from '../state/declare';

interface IScepterContentsProps {

    readonly commands: ICommand[];
    readonly current: ICommand | null;
    readonly path: string[];

    readonly setCommands: (commands: ICommand[]) => void;
    readonly setCurrent: (current: ICommand) => void;
    readonly setPath: (path: string[]) => void;
}

const mapStates = (store: IScepterStore): Partial<IScepterContentsProps> => ({

    commands: store.command.commands,
    current: store.command.current,
    path: store.command.path,
});

const mapDispatches: Partial<IScepterContentsProps> = {

    setCommands: scepter_setCommands,
    setCurrent: scepter_setCurrent,
    setPath: scepter_setPath,
};

export const Scepter$Contents: React.SFC<IScepterContentsProps> = (props: IScepterContentsProps) => {

    return (<div className={styleScepter.contents}>
    </div>);
};

export const Scepter$ConnectedContents: ConnectedComponentClass<typeof Scepter$Contents, any> =
    connect(mapStates, mapDispatches as any)(Scepter$Contents);
