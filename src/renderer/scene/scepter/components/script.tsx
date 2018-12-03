/**
 * @author WMXPY
 * @namespace Scene_Scepter_Component
 * @description Script
 */

import { ICommand } from "#P/declare";
import * as React from "react";

interface ISingleScriptProps {

    command: ICommand;
    updateCommand: (command: ICommand) => void;
}

export const SingleScript: React.SFC<ISingleScriptProps> = (props: ISingleScriptProps): JSX.Element => {

    return (<textarea
        style={{
            width: '100%',
        }}
        value={JSON.stringify(props.command)}
        onChange={(event) => props.updateCommand(JSON.parse(event.target.value))}
    />);
};
