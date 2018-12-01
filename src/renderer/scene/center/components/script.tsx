/**
 * @author WMXPY
 * @namespace Scene_Center_Component
 * @description Script
 */

import { ICommand } from "#P/declare";
import * as React from "react";

interface ISingleScriptProps {

    command: ICommand;
}

export const SingleScript: React.SFC<ISingleScriptProps> = (props: ISingleScriptProps): JSX.Element => {

    return (<div>{JSON.stringify(props.command)}</div>);
};
