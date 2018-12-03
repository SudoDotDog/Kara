/**
 * @author WMXPY
 * @namespace Scene_Scepter_Components_Contents
 * @description Breadcrumb
 */

import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";

interface IScepterBreadcrumbProps {

    readonly path: string[];

    readonly setPath: (path: string[]) => void;
}

export const Scepter$Breadcrumb: React.SFC<IScepterBreadcrumbProps> = (props: IScepterBreadcrumbProps) => {

    return (<div className={styleScepter.breadcrumb}>

        1 > 2 > 3
    </div>);
};
