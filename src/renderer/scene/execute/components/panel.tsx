/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Panel
 */

import { ICommand } from "#P/declare";
import { Provider } from "#P/provider";
import * as React from "react";
import { EmptyElement } from "renderer/components/empty";

const NearestTooltip = (props: {
    current: string;
}): JSX.Element => {

    const provider: Provider = Provider.instance;
    const nearest: ICommand | null = provider.nearest(props.current);

    if (nearest) {
        return (<div>Press Enter for "{nearest.command}"</div>);
    }
    return (<EmptyElement />);
};

export const Panel = (props: {
    current: string;
}): JSX.Element => {

    return (<div>
        <div>{props.current}</div>
        <NearestTooltip current={props.current} />
    </div>);
};
