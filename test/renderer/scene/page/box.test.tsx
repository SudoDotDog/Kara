/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import * as Sinon from 'sinon';
import { Box, IBoxProps } from '../../../../src/renderer/scene/execute/page/box';

describe('Given a <Box /> Component', (): void => {

    const chance: Chance.Chance = new Chance('renderer-scene-page-box');

    const getDefaultProps = (): IBoxProps => ({
        counter: chance.natural(),
        setCounter: Sinon.stub(),
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

        expect(component.prop('className')).to.be.equal('title');
    });
});
