/**
 * @author WMXPY
 * @namespace Components_Panel
 * @description Command
 */

import { ICommand } from "#P/declare";
import { KeyTooltip } from "#R^components/decorate";
import { EmptyElement } from "#R^components/empty";
import * as styleDecorate from '#S/components/decorate.sass';
import * as React from "react";
import { IComponentsPanelProps } from "./declare";

export const CommandDeclareTooltip = (props: IComponentsPanelProps): JSX.Element => {

    const matched: ICommand | null = props.provider.match(props.input);

    if (matched) {
        return (<React.Fragment>

            <KeyTooltip text="Enter" />
            <div className={styleDecorate.textTooltip}>{matched.command}</div>
        </React.Fragment>);
    }

    const nearest: ICommand | null = props.provider.nearest(props.input);

    if (nearest) {
        return (<React.Fragment>

            <KeyTooltip text="Tab" />
            <div className={styleDecorate.textTooltip}>{nearest.command}</div>
        </React.Fragment>);
    }
    return (<EmptyElement />);
};
