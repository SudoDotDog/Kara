/**
 * @author WMXPY
 * @namespace Scene_Execute_Component
 * @description Panel
 */

import { COMMAND_DECLARE } from "#P/declare";
import { Provider } from "#P/renderer";
import { PanelComponent } from "#R^declare/relative";
import { Relative } from "#R^relative/relative";
import { StyleBuilder } from "#R^util/style";
import * as styleDecorate from '#S/components/decorate.sass';
import * as panelStyles from '#S/scene/execute/panel.sass';
import * as React from "react";

export interface IExecuteComponentPanelProps {

    command: string | null;
    current: COMMAND_DECLARE;
    input: string;
}

export const Panel: React.SFC<IExecuteComponentPanelProps> = (props: IExecuteComponentPanelProps): JSX.Element => {

    const relative: Relative = Relative.declare(props.current);
    const ToolTipComponent: PanelComponent = relative.toolTip();
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
