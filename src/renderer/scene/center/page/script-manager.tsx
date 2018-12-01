/**
 * @author WMXPY
 * @namespace Scene_Center_Page
 * @description Script Manager
 */

import { ICommand } from "#P/declare";
import { initialCommand } from "#P/renderer/command";
import { readProviderResource, writeProviderResource } from "#R~center/action/resources";
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

            {this.state.commands.map((command: ICommand, index: number) => <SingleScript
                command={command}
                updateCommand={this._getCommandUpdateFunc(index)}
            />)}

            <button onClick={() => this.setState({
                commands: [
                    ...this.state.commands,
                    initialCommand(),
                ],
            })}>Add</button>

            <button onClick={() => writeProviderResource(this.state.commands)}>Update</button>
        </div>);
    }

    private _getCommandUpdateFunc(position: number): (command: ICommand) => void {

        return (command: ICommand) => {

            const commands: ICommand[] = [...this.state.commands];

            commands[position] = command;

            this.setState({
                commands,
            });
        };
    }

    private async _updateCommandsFromProvider(): Promise<void> {

        const commands: ICommand[] = await readProviderResource();
        this.setState({
            commands,
        });
    }
}

