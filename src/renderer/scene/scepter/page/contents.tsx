/**
 * @author WMXPY
 * @namespace Scene_Scepter_Page
 * @description Contents
 */

import { ICommand } from '#P/declare';
import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";
import { connect, ConnectedComponentClass } from 'react-redux';
import { writeProviderResource } from '../action/resources';
import { Scepter$Breadcrumb } from '../components/contents/breadcrumb';
import { Scepter$Menu } from '../components/contents/menu';
import { Scepter$Query } from '../components/contents/query';
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

    const updateCommand = async (): Promise<boolean> => await writeProviderResource(props.commands);

    const addPath = (path: string) => props.setPath([...props.path, path]);

    return (<div className={styleScepter.contents}>

        <Scepter$Menu

            updateCommand={updateCommand}
        />
        <Scepter$Breadcrumb

            path={props.path}
            setPath={props.setPath}
        />
        <Scepter$Query

            command={props.current}
            addPath={addPath}
            setCommand={props.setCurrent}
        />
    </div>);
};

export const Scepter$ConnectedContents: ConnectedComponentClass<typeof Scepter$Contents, any> =
    connect(mapStates, mapDispatches as any)(Scepter$Contents);
