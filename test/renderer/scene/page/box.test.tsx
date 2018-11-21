/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box Test
 */

import { Box, IBoxProps } from '#R~execute/page/box';
import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { Sandbox } from '../../../mock/sandbox/sandbox';

describe('Given a <Box /> Component', (): void => {

    const chance: Chance.Chance = new Chance('renderer-scene-page-box');

    const getDefaultProps = (): IBoxProps => ({
        counter: chance.natural(),
        setCounter: new Sandbox().func(),
    });

    const render = (props: IBoxProps = getDefaultProps()) => {
        return shallow(<Box {...props} />);
    };

    it('should be able to render', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal('div');
    });

    it('should have a correct class name', (): void => {

        const component: ShallowWrapper = render();

        expect(component.prop('className')).to.be.equal('outer');
    });
});
