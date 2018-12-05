/**
 * @author WMXPY
 * @namespace Scene_Scepter_Page
 * @description Scepter
 */

import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";
import { Scepter$ConnectedContents } from './contents';
import { Scepter$ConnectedNav } from './nav';

export const Scepter$Scepter: React.SFC<{}> = () => (

    <div className={styleScepter.wrapper}>

        <Scepter$ConnectedNav />
        <Scepter$ConnectedContents />
    </div>
);
