/**
 * @author WMXPY
 * @namespace Components_Panel
 * @description Command
 */

import { ICommand } from "#P/declare";
import { Provider } from "#P/renderer";
import { KeyTooltip } from "#R^components/decorate";
import { EmptyElement } from "#R^components/empty";
import * as panelStyles from '#S/scene/execute/panel.sass';
import * as React from "react";
import { IComponentsPanelProps } from "./declare";

export const CommandDeclareTooltip = (props: IComponentsPanelProps): JSX.Element => {

    const matched: ICommand | null = props.provider.match(props.input);

    if (matched) {
        return (<div className={panelStyles.tooltip}>
            <KeyTooltip text="Enter" />
            <div className={panelStyles.text}>{matched.command}</div>
        </div>);
    }

    const nearest: ICommand | null = props.provider.nearest(props.input);

    if (nearest) {
        return (<div className={panelStyles.tooltip}>
            <KeyTooltip text="Tab" />
            <div className={panelStyles.text}>{nearest.command}</div>
        </div>);
    }
    return (<EmptyElement />);
};
