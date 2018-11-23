/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Panel
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE } from "#P/declare";
import { Provider } from "#P/renderer";
import { CommandDeclareTooltip } from "#R^components/panel/command";
import { IComponentsPanelProps } from "#R^components/panel/declare";
import { ErrorDeclareTooltip } from "#R^components/panel/info";
import { StyleBuilder } from "#R^util/style";
import * as styleDecorate from '#S/components/decorate.sass';
import * as panelStyles from '#S/scene/execute/panel.sass';
import * as React from "react";

const getToolTip = (current: COMMAND_DECLARE): (props: IComponentsPanelProps) => JSX.Element => {

    switch (current.type) {

        case COMMAND_DECLARE_TYPE.COMMAND: return CommandDeclareTooltip;
        case COMMAND_DECLARE_TYPE.ERROR: return ErrorDeclareTooltip;
    }
    return CommandDeclareTooltip;
};

export const Panel = (props: {
    typeBuffer: string;
    current: COMMAND_DECLARE;
}): JSX.Element => {

    const ToolTipComponent: (props: IComponentsPanelProps) => JSX.Element = getToolTip(props.current);
    const provider: Provider = Provider.instance;

    return (<div className={panelStyles.panel}>

        <div className={panelStyles.field}>

            {props.typeBuffer}
        </div>

        <div className={StyleBuilder.init(panelStyles.tooltip, styleDecorate.tooltip).build()}>
            <ToolTipComponent

                provider={provider}
                input={props.typeBuffer}
            />
        </div>
    </div>);
};
