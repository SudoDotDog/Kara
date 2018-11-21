/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Protocol
 */

import { COMMAND_DECLARE } from '#P/declare';
import { AutoHorizontalExpend } from '#R~execute/components/auto-horizontal-expend';
import { Panel } from '#R~execute/components/panel';
import * as styleExecute from '#S/scene/execute/execute.sass';
import * as React from "react";
import { Details } from './details';

export interface IProtocolProps {

    readonly current: COMMAND_DECLARE;
    readonly typeBuffer: string;
}

export const Protocol: React.SFC<IProtocolProps> = (props: IProtocolProps): JSX.Element => {

    return (<div className={styleExecute.outer}>

        <div className={styleExecute.title}>

            <div className={styleExecute.titleLeft}>

                <div></div>
            </div>
            <AutoHorizontalExpend className={styleExecute.titleRight}>

                <Panel
                    current={props.current}
                    typeBuffer={props.typeBuffer}
                />
            </AutoHorizontalExpend>
        </div>

        <Details
            current={props.current}
            typeBuffer={props.typeBuffer}
        />
    </div>);
};
