/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Protocol
 */

import { BUILD_MODE } from '#C/declare';
import { COMMAND_DECLARE } from '#P/declare';
import { StyleBuilder } from '#R^util/style';
import { AutoHorizontalExpend } from '#R~execute/components/auto-horizontal-expend';
import { Panel } from '#R~execute/components/panel';
import * as styleExecute from '#S/scene/execute/execute.sass';
import * as React from "react";
import { ConnectedDetails } from './details';

export interface IProtocolProps {

    readonly current: COMMAND_DECLARE;
    readonly typeBuffer: string;
}

export const Protocol: React.SFC<IProtocolProps> = (props: IProtocolProps): JSX.Element => {

    const isDebug: boolean = process.env.NODE_ENV === BUILD_MODE.DEVELOPMENT;

    return (<div className={styleExecute.outer}>

        <div className={styleExecute.title}>

            <div className={
                StyleBuilder
                    .init(styleExecute.titleLeft)
                    .if(isDebug, styleExecute.unlock)
                    .build()
            }>
                {props.current.type}
            </div>
            <AutoHorizontalExpend className={styleExecute.titleRight}>

                <Panel
                    current={props.current}
                    typeBuffer={props.typeBuffer}
                />
            </AutoHorizontalExpend>
        </div>

        <ConnectedDetails />
    </div>);
};
