/**
 * @author WMXPY
 * @namespace Components_Panel
 * @description Command Test
 */

import { EmptyElement } from '#R^components/empty';
import { IComponentsPanelProps } from '#R^declare/relative';
import { CommandDeclareTooltip } from '#R^relative/panel/command';
import { expect } from 'chai';
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { MockProvider } from '../../../mock/clazz/provider';

describe('Given a <CommandDeclareToolTip /> Component', (): void => {

    const chance: Chance.Chance = new Chance('renderer-components-panel-command');

    const getDefaultProps: () => IComponentsPanelProps = () => ({

        command: chance.string(),
        provider: new MockProvider() as any,
        input: chance.string(),
    });

    const render = (props: IComponentsPanelProps = getDefaultProps()) => {
        return shallow(<CommandDeclareTooltip {...props} />);
    };

    it('should render a empty when nothing matched', (): void => {

        const mockProvider: MockProvider = new MockProvider();

        const component: ShallowWrapper = render({
            ...getDefaultProps(),
            provider: mockProvider as any,
        });

        expect(component.type()).to.be.equal(EmptyElement);
    });
});
