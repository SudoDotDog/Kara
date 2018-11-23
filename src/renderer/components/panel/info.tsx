/**
 * @author WMXPY
 * @namespace Components_Panel
 * @description Info
 */

import * as styleDecorate from '#S/components/decorate.sass';
import * as React from "react";
import { IComponentsPanelProps } from "./declare";

export const ErrorDeclareTooltip = (props: IComponentsPanelProps): JSX.Element => {

    return (<div className={styleDecorate.textTooltip}>ERROR</div>);
};
