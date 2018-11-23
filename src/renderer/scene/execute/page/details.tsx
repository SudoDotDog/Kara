/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Details
 */

import { COMMAND_DECLARE } from '#P/declare';
import { VerticalExpendable } from '#R~execute/components/vertical-expendable';
import { IStore } from '#R~execute/state/declare';
import { ExecuteResizer } from '#R~execute/util/resizer';
import * as React from "react";
import { connect, ConnectedComponentClass } from 'react-redux';

export interface IDetailsProps {

    readonly current: COMMAND_DECLARE;
    readonly expend: boolean;
    readonly input: string;
}

const mapStateDetailsCareAbout = (store: IStore): Partial<IDetailsProps> => ({

    current: store.current.current,
    expend: store.application.expend,
    input: store.buffer.input,
});

const mapDispatchDetailsCareAbout: any = {};

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

export const ConnectedDetails: ConnectedComponentClass<typeof Details, any> = connect(mapStateDetailsCareAbout, mapDispatchDetailsCareAbout)(Details);
