/**
 * @author WMXPY
 * @namespace Scene_Scepter_Page
 * @description Nav
 */

import { ICommand } from '#P/declare';
import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";
import { connect, ConnectedComponentClass } from 'react-redux';
import { scepter_setCurrent } from '../state/command/command';
import { IScepterStore } from '../state/declare';

interface IScepterNavProps {

    readonly commands: ICommand[];
    readonly current: ICommand | null;

    readonly setCurrent: (current: ICommand) => void;
}

const mapStates = (store: IScepterStore): Partial<IScepterNavProps> => ({

    commands: store.command.commands,
    current: store.command.current,
});

const mapDispatches: Partial<IScepterNavProps> = {

    setCurrent: scepter_setCurrent,
};

export const Scepter$Nav: React.SFC<IScepterNavProps> = (props: IScepterNavProps) => {

    return (<div className={styleScepter.nav}>

        {props.commands.map((command: ICommand) =>
            (<button>
                {command.name}
            </button>),
        )}
    </div>);
};

export const Scepter$ConnectedNav: ConnectedComponentClass<typeof Scepter$Nav, any> =
    connect(mapStates, mapDispatches as any)(Scepter$Nav);
