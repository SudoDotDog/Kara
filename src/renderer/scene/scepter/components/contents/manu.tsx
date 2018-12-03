/**
 * @author WMXPY
 * @namespace Scene_Scepter_Components_Contents
 * @description Menu
 */

import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";

interface IScepterMenuProps {

    readonly updateCommand: () => void;
}

export const Scepter$Menu: React.SFC<IScepterMenuProps> = (props: IScepterMenuProps) => {

    return (<div className={styleScepter.menu}>

        Save
    </div>);
};
