/**
 * @author WMXPY
 * @namespace Provide
 * @description Provider Test
 */

import { Provider } from '#P/provider';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given a {Provider} class', (): void => {

    const chance: Chance.Chance = new Chance('provide-provider');

    it('should be able to contactable', (): void => {

        const clazz: Provider = Provider.instance;

        // tslint:disable-next-line
        expect(clazz).to.be.exist;
    });

    it('should be able to inject command', (): void => {

        const clazz: Provider = Provider.instance;
        clazz.register({
            command: chance.string(),
            script: chance.string(),
        });

        expect(clazz).to.be.lengthOf(1);
    });
});
