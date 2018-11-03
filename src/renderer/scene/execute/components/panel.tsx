/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Panel
 */

import { ICommand } from "#P/declare";
import { Provider } from "#P/provider";
import { EmptyElement } from "#R^components/empty";
import * as panelStyles from '#R^style/scene/execute/panel.sass';
import * as React from "react";

const NearestTooltip = (props: {
    current: string;
}): JSX.Element => {

    const provider: Provider = Provider.instance;
    const nearest: ICommand | null = provider.nearest(props.current);

    if (nearest) {
        return (<div className={panelStyles.tooltip}>Press Enter for "{nearest.command}"</div>);
    }
    return (<EmptyElement />);
};

export const Panel = (props: {
    current: string;
}): JSX.Element => {

    return (<div className={panelStyles.panel}>
        <div className={panelStyles.field}>{props.current}</div>
        <NearestTooltip current={props.current} />
    </div>);
};
