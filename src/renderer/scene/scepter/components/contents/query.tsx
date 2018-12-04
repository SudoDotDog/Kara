/**
 * @author WMXPY
 * @namespace Scene_Scepter_Components_Contents
 * @description Query
 */

import { ICommand } from '#P/declare';
import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";

interface IScepterQueryProps {

    readonly command: ICommand | null;

    readonly addPath: (path: string) => void;
    readonly setCommand: (command: ICommand) => void;
}

export const Scepter$Query: React.SFC<IScepterQueryProps> = (props: IScepterQueryProps) => {

    return (<div className={styleScepter.query}>

        {JSON.stringify(props)}
    </div>);
};
