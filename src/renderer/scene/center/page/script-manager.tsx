/**
 * @author WMXPY
 * @namespace Scene_Center_Page
 * @description Script Manager
 */

import { ICommand } from "#P/declare";
import { readProviderResource } from "#R~center/action/resources";
import { SingleScript } from "#R~center/components/script";
import * as React from "react";

interface ICenterScriptManagerState {

    readonly commands: ICommand[];
}

export class CenterScriptManager extends React.Component<{}, ICenterScriptManagerState> {

    public readonly state = {

        commands: [],
    };

    public componentWillMount() {

        this._updateCommandsFromProvider();
    }

    public render(): JSX.Element {

        return (<div>

            {this.state.commands.map((command: ICommand) => <SingleScript command={command} />)}
        </div>);
    }

    private async _updateCommandsFromProvider(): Promise<void> {

        const commands: ICommand[] = await readProviderResource();
        this.setState({
            commands,
        });
    }
}

