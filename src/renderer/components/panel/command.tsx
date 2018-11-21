/**
 * @author WMXPY
 * @namespace Components_Current
 * @description Command
 */

import { ICommand } from "#P/declare";
import { Provider } from "#P/renderer";
import { KeyTooltip } from "#R^components/decorate";
import { EmptyElement } from "#R^components/empty";
import * as panelStyles from '#S/scene/execute/panel.sass';
import * as React from "react";

export const CommandDeclareTooltip = (props: {
    typeBuffer: string;
}): JSX.Element => {

    const provider: Provider = Provider.instance;
    const matched: ICommand | null = provider.match(props.typeBuffer);

    if (matched) {
        return (<div className={panelStyles.tooltip}>
            <KeyTooltip text="Enter" />
            <div className={panelStyles.text}>{matched.command}</div>
        </div>);
    }

    const nearest: ICommand | null = provider.nearest(props.typeBuffer);

    if (nearest) {
        return (<div className={panelStyles.tooltip}>
            <KeyTooltip text="Tab" />
            <div className={panelStyles.text}>{nearest.command}</div>
        </div>);
    }
    return (<EmptyElement />);
};
