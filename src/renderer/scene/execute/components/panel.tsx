/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Panel
 */

import { COMMAND_DECLARE, ICommand } from "#P/declare";
import { Provider } from "#P/renderer";
import { KeyTooltip } from "#R^components/decorate";
import { EmptyElement } from "#R^components/empty";
import * as panelStyles from '#S/scene/execute/panel.sass';
import * as React from "react";

const NearestTooltip = (props: {
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

export const Panel = (props: {
    typeBuffer: string;
    current: COMMAND_DECLARE;
}): JSX.Element => {

    return (<div className={panelStyles.panel}>
        <div className={panelStyles.field}>{props.typeBuffer}</div>
        <NearestTooltip typeBuffer={props.typeBuffer} />
    </div>);
};
