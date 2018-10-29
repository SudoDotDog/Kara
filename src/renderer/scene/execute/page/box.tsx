/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box
 */

import * as React from "react";
import * as styleExecute from '../../../style/scene/execute/page/execute.sass';

export interface IState {

    fullSized: boolean;
}

export class Box extends React.Component<{}, IState> {

    public readonly state = {

        fullSized: false,
    };

    public constructor(props: {}) {

        super(props);
    }

    public componentDidMount() {

        setImmediate(() => this.setState({
            fullSized: true,
        }));
    }

    public render(): JSX.Element {

        return (
            <div className={styleExecute.title}>
                <div className={styleExecute.titleLeft}>
                    <div></div>
                </div>
                <div className={[
                    styleExecute.titleRight,
                    this.state.fullSized && styleExecute.titleRightFullSize,
                ].join(' ')}>
                    <div>Kara</div>
                </div>
            </div>
        );
    }
}
