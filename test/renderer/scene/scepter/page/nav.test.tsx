/**
 * @author WMXPY
 * @namespace Renderer_Scene_Scepter_Page
 * @description Nav Test
 */

import { IScepterNavProps, Scepter$Nav } from '#R~scepter/page/nav';
import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { Sandbox } from '../../../../mock/sandbox/sandbox';

describe('Given a <Nav /> Component', (): void => {

    const chance: Chance.Chance = new Chance('renderer-scene-scepter-page-nav');

    const getDefaultProps = (): IScepterNavProps => ({

        commands: [],
        current: null,

        setCommands: Sandbox.create().func(),
        setCurrent: Sandbox.create().func(),
    });

    const render = (props: IScepterNavProps = getDefaultProps()) => {
        return shallow(<Scepter$Nav {...props} />);
    };

    it('should render a empty div with empty commands', (): void => {

        const component: ShallowWrapper = render();

        expect(component.type()).to.be.equal('div');
    });
});
