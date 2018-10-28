/**
 * @author WMXPY
 * @namespace Scene_Execute_Page
 * @description Box Test
 */

import { expect } from 'chai';
import * as React from "react";
import { create, ReactTestRenderer } from 'react-test-renderer'; // ES6
import { Box } from '../../../../src/renderer/scene/execute/page/box';

describe('Given a <Box /> Component', (): void => {

    const render = (): ReactTestRenderer => create(<Box />);

    it('should be able to render', async (): Promise<void> => {

        const component: ReactTestRenderer = render();
        expect(component.root.type).to.be.equal(Box);
    });

    // it('should be a div', async (): Promise<void> => {

    //     const component: ReactTestRenderer = render();
    //     expect(component.root.children[0]).to.be.equal('ttt');
    // });
});
