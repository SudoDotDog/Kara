/**
 * @author WMXPY
 * @namespace Component
 * @description Empty Test
 */

import { EmptyElement } from '#R^components/empty';
import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";

describe('Given a <Empty /> Component', (): void => {

    const chance: Chance.Chance = new Chance('renderer-components-empty');

    const render = (props: {} = {}) => {
        return shallow(<EmptyElement {...props} />);
    };

    it('should render a empty', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal(null);
    });
});
