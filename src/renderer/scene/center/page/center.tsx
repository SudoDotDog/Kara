/**
 * @author WMXPY
 * @namespace Scene_Center_Page
 * @description Box
 */

import { CENTER_FRAME } from '#R~center/declare/center';
import * as styleCenter from '#S/scene/center/center.sass';
import * as React from "react";
import { CenterScriptManager } from './script-manager';

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

                    <button onClick={this._getSwitchToPageFunc(CENTER_FRAME.SCRIPT_MANAGER)}>

                        Script Manager
                    </button>
                    <button onClick={this._getSwitchToPageFunc(CENTER_FRAME.APPLICATION)}>

                        Application
                    </button>
                </div>
                <div className={styleCenter.right}>

                    {this._renderPage()}
                </div>
            </div>
        );
    }

    private _getSwitchToPageFunc(page: CENTER_FRAME): () => void {

        return () => this.setState({ frame: page });
    }

    private _renderPage(): JSX.Element {

        console.log(this.state);

        switch (this.state.frame) {

            case CENTER_FRAME.SCRIPT_MANAGER:
                return (<CenterScriptManager />);
            case CENTER_FRAME.APPLICATION:
                return (<div></div>);
        }

        return (<div></div>);
    }
}
