/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Details
 */

import { VerticalExpendable } from '#R~execute/components/vertical-expendable';
import { ExecuteResizer } from '#R~execute/util/resizer';
import * as React from "react";

export interface IDetailsProps {

    expend?: boolean;
}

export class Details extends React.Component<IDetailsProps, {}> {

    public constructor(props: IDetailsProps) {

        super(props);
    }

    public componentWillUpdate(nextProps: IDetailsProps): void {

        if (nextProps.expend) {

            ExecuteResizer.extendExecute();
        } else {

            ExecuteResizer.reduceExecute();
        }
    }

    public render(): JSX.Element {

        return (<VerticalExpendable expend={this.props.expend}>

            <div></div>
        </VerticalExpendable>);
    }
}
