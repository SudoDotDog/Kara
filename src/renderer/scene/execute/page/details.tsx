/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Details
 */

import { COMMAND_DECLARE } from '#P/declare';
import { VerticalExpendable } from '#R~execute/components/vertical-expendable';
import { ExecuteResizer } from '#R~execute/util/resizer';
import * as React from "react";

export interface IDetailsProps {

    readonly current: COMMAND_DECLARE;
    readonly typeBuffer: string;
}

export class Details extends React.Component<IDetailsProps, {}> {

    public constructor(props: IDetailsProps) {

        super(props);
    }

    public componentWillUpdate(nextProps: IDetailsProps): void {

        if (false) {

            ExecuteResizer.extendExecute();
        } else {

            ExecuteResizer.reduceExecute();
        }
    }

    public render(): JSX.Element {

        return (<VerticalExpendable expend={false}>

            <div></div>
        </VerticalExpendable>);
    }
}
