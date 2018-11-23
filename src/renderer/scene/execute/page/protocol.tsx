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
import { IStore } from '#R~execute/state/declare';
import * as styleExecute from '#S/scene/execute/execute.sass';
import * as React from "react";
import { connect, ConnectedComponentClass } from 'react-redux';
import { ConnectedDetails } from './details';

export interface IProtocolProps {

    readonly command: string | null;
    readonly current: COMMAND_DECLARE;
    readonly input: string;
}

const mapStateProtocolCareAbout = (store: IStore): Partial<IProtocolProps> => ({

    command: store.current.command,
    current: store.current.current,
    input: store.buffer.input,
});

const mapDispatchProtocolCareAbout: any = {};

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
                    command={props.command}
                    current={props.current}
                    input={props.input}
                />
            </AutoHorizontalExpend>
        </div>

        <ConnectedDetails />
    </div>);
};

export const ConnectedProtocol: ConnectedComponentClass<typeof Protocol, any> = connect(mapStateProtocolCareAbout, mapDispatchProtocolCareAbout)(Protocol);
