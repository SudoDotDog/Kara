/**
 * @author WMXPY
 * @namespace Scene_Scepter_Page
 * @description Scepter
 */

import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";

export class Scepter$Scepter extends React.Component<{}, {}> {

    public constructor(props: {}) {

        super(props);
    }

    public render(): JSX.Element {

        return (
            <div className={styleScepter.wrapper}>
            </div>
        );
    }
}
