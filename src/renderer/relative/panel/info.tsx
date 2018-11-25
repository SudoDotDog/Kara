/**
 * @author WMXPY
 * @namespace Components_Panel
 * @description Info
 */

import { IComponentsPanelProps, PanelComponent } from '#R^declare/relative';
import * as styleDecorate from '#S/components/decorate.sass';
import * as React from "react";

export const ErrorDeclareTooltip: PanelComponent = (props: IComponentsPanelProps): JSX.Element => {

    return (<div className={styleDecorate.textTooltip}>ERROR</div>);
};

export const InputDeclareTooltip: PanelComponent = (props: IComponentsPanelProps): JSX.Element => {

    return (<div className={styleDecorate.textTooltip}>Input: {props.command || 'UNKNOWN'}</div>);
};
