/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Panel
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE } from "#P/declare";
import { CommandDeclareTooltip } from "#R^components/current/command";
import * as panelStyles from '#S/scene/execute/panel.sass';
import * as React from "react";

const getToolTip = (current: COMMAND_DECLARE): (props: {
    typeBuffer: string;
}) => JSX.Element => {

    switch (current.type) {

        case COMMAND_DECLARE_TYPE.COMMAND: return CommandDeclareTooltip;
    }
    return CommandDeclareTooltip;
};

export const Panel = (props: {
    typeBuffer: string;
    current: COMMAND_DECLARE;
}): JSX.Element => {

    const ToolTipComponent: (props: {
        typeBuffer: string;
    }) => JSX.Element = getToolTip(props.current);

    return (<div className={panelStyles.panel}>

        <div className={panelStyles.field}>

            {props.typeBuffer}
        </div>
        <ToolTipComponent
            typeBuffer={props.typeBuffer}
        />
    </div>);
};
