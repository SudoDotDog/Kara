/**
 * @author WMXPY
 * @namespace Scene_Scepter_Page
 * @description Nav
 */

import { ICommand } from '#P/declare';
import { createDoneCommandDeclare } from '#P/util/declare';
import { scepter_setCommands, scepter_setCurrent } from '#R~scepter/state/command/command';
import { IScepterStore } from '#R~scepter/state/declare';
import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";
import { connect, ConnectedComponentClass } from 'react-redux';

interface IScepterNavProps {

    readonly commands: ICommand[];
    readonly current: ICommand | null;

    readonly setCommands: (commands: ICommand[]) => void;
    readonly setCurrent: (current: ICommand) => void;
}

const mapStates = (store: IScepterStore): Partial<IScepterNavProps> => ({

    commands: store.command.commands,
    current: store.command.current,
});

const mapDispatches: Partial<IScepterNavProps> = {

    setCommands: scepter_setCommands,
    setCurrent: scepter_setCurrent,
};

export const Scepter$Nav: React.SFC<IScepterNavProps> = (props: IScepterNavProps) => {

    const addCommand = (): void => {

        const newCommand: ICommand[] = props.commands.concat({
            command: '',
            description: '',
            declare: createDoneCommandDeclare(),
            key: '',
            name: '',
        });
        props.setCommands(newCommand);
    };

    return (<div className={styleScepter.nav}>

        {props.commands.map((command: ICommand, index: number) =>
            (<button key={command.name + index}>
                {command.name}
            </button>),
        )}

        <button onClick={addCommand}>
            +
        </button>
    </div>);
};

export const Scepter$ConnectedNav: ConnectedComponentClass<typeof Scepter$Nav, any> =
    connect(mapStates, mapDispatches as any)(Scepter$Nav);
