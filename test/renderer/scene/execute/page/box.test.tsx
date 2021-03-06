/**
 * @author WMXPY
 * @namespace Renderer_Scene_Execute_Page
 * @description Box Test
 */

import { createCommandCommandDeclare } from '#P/util/declare';
import { Box, IBoxProps } from '#R~execute/page/box';
import { ConnectedProtocol } from '#R~execute/page/protocol';
import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { Sandbox } from '../../../../mock/sandbox/sandbox';

describe('Given a <Box /> Component', (): void => {

    const chance: Chance.Chance = new Chance('renderer-scene-execute-page-box');

    const getDefaultProps = (): IBoxProps => ({

        expendDetails: new Sandbox().func(),
        shrinkDetails: new Sandbox().func(),

        current: createCommandCommandDeclare(),
        setCommand: new Sandbox().func(),
        setCurrent: new Sandbox().func(),

        input: chance.string(),
        clearInput: new Sandbox().func(),
        setInput: new Sandbox().func(),
    });

    const render = (props: IBoxProps = getDefaultProps()) => {
        return shallow(<Box {...props} />);
    };

    it('should render a protocol', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(ConnectedProtocol);
    });
});
