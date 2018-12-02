/**
 * @author WMXPY
 * @namespace Scepter_Center_Page
 * @description Scepter
 */

import { CENTER_FRAME } from '#R~center/declare/center';
import * as styleScepter from '#S/scene/scepter/scepter.sass';
import * as React from "react";

interface IScepterState {

    readonly frame: CENTER_FRAME;
}

export class Scepter extends React.Component<{}, IScepterState> {

    public readonly state = {

        frame: CENTER_FRAME.NONE,
    };

    public constructor(props: {}) {

        super(props);
    }

    public render(): JSX.Element {

        return (
            <div className={styleScepter.title}>
                123
            </div>
        );
    }
}
