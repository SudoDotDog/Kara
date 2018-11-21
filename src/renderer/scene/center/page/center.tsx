/**
 * @author WMXPY
 * @namespace Scene_Center_Page
 * @description Box
 */

import { CENTER_FRAME } from '#R~center/declare/center';
import * as styleCenter from '#S/scene/center/center.sass';
import * as React from "react";

interface ICenterState {

    readonly frame: CENTER_FRAME;
}

export class Center extends React.Component<{}, ICenterState> {

    public readonly state = {

        frame: CENTER_FRAME.NONE,
    };

    public constructor(props: {}) {

        super(props);
    }

    public render(): JSX.Element {

        return (
            <div className={styleCenter.center}>
                <div className={styleCenter.left}>1</div>
                <div className={styleCenter.right}>2</div>
            </div>
        );
    }
}
