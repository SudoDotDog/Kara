/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Panel
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE } from "#P/declare";
import { Provider } from "#P/renderer";
import { IComponentsPanelProps } from "#R^declare/relative";
import { CommandDeclareTooltip } from "#R^relative/panel/command";
import { ErrorDeclareTooltip, InputDeclareTooltip } from "#R^relative/panel/info";
import { StyleBuilder } from "#R^util/style";
import * as styleDecorate from '#S/components/decorate.sass';
import * as panelStyles from '#S/scene/execute/panel.sass';
import * as React from "react";

const getToolTip = (current: COMMAND_DECLARE): (props: IComponentsPanelProps) => JSX.Element => {

    switch (current.type) {

        case COMMAND_DECLARE_TYPE.COMMAND: return CommandDeclareTooltip;
        case COMMAND_DECLARE_TYPE.ERROR: return ErrorDeclareTooltip;
        case COMMAND_DECLARE_TYPE.INPUT: return InputDeclareTooltip;
    }
    return ErrorDeclareTooltip;
};

export interface IExecuteComponentPanelProps {

    command: string | null;
    current: COMMAND_DECLARE;
    input: string;
}

export const Panel: React.SFC<IExecuteComponentPanelProps> = (props: IExecuteComponentPanelProps): JSX.Element => {

    const ToolTipComponent: (props: IComponentsPanelProps) => JSX.Element = getToolTip(props.current);
    const provider: Provider = Provider.instance;

    return (<div className={panelStyles.panel}>

        <div className={panelStyles.field}>

            {props.input}
        </div>

        <div className={StyleBuilder.init(panelStyles.tooltip, styleDecorate.tooltip).build()}>

            <ToolTipComponent
                command={props.command}
                provider={provider}
                input={props.input}
            />
        </div>
    </div>);
};
