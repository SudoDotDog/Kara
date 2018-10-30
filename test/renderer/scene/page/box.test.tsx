/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box Test
 */

import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { Box, IBoxProps } from '../../../../src/renderer/scene/execute/page/box';

describe('Given a <Box /> Component', (): void => {

    const getDefaultProps = (): IBoxProps => ({
        counter: 0,
        setCounter: () => { },
    });

    const render = (props: IBoxProps = getDefaultProps()) => {
        return shallow(<Box {...props} />);
    };

    it('should be able to render', async (): Promise<void> => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal('div');
    });

    it('should have a correct class name', async (): Promise<void> => {

        const component: ShallowWrapper = render();

        expect(component.prop('className')).to.be.equal('title');
    });
});
