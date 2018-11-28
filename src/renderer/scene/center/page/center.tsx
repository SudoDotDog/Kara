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
                <div className={styleCenter.left}>
                    <button>
                        Script Manager
                    </button>
                    <button>
                        Application
                    </button>
                </div>
                <div className={styleCenter.right}>2</div>
            </div>
        );
    }

    private _renderPage(): JSX.Element {

        switch (this.state.frame) {
            case CENTER_FRAME.SCRIPT_MANAGER:
                return (<div></div>);
            case CENTER_FRAME.APPLICATION:
                return (<div></div>);
        }

        return (<div></div>);
    }
}
