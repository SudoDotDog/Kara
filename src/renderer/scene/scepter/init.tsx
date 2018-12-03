/**
 * @author WMXPY
 * @namespace Scene_Scepter
 * @description Init
 */

import { ICommand } from "#P/declare";
import { readProviderResource } from "#R~center/action/resources";
import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
import { scepter_setCommands, scepter_setCurrent, scepter_setPath } from './state/command/command';

export interface IScepterInitProps {

    readonly children: any;

    readonly setCommands: (commands: ICommand[]) => void;
}

const mapDispatches: Partial<IScepterInitProps> = {

    setCommands: scepter_setCommands,
};

export class Scepter$Init extends React.Component<IScepterInitProps, {}> {

    public componentDidMount(): void {

        this._updateCommandsFromProvider();
    }

    public render(): JSX.Element {
        return this.props.children;
    }

    private async _updateCommandsFromProvider(): Promise<void> {

        const commands: ICommand[] = await readProviderResource();
        this.props.setCommands(commands);
    }
}

export const Scepter$ConnectedInit: ConnectedComponentClass<typeof Scepter$Init, any> =
    connect(null, mapDispatches as any)(Scepter$Init);
