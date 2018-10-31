/**
 * @author WMXPY
 * @namespace Util
 * @description Redux Test
 */

import { Redux } from '#R^util/redux';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given a {Redux} class', (): void => {

    const chance: Chance.Chance = new Chance('renderer-util-redux');

    const redux = (initial: any = {
        key: chance.string(),
    }): Redux<any, any> => new Redux(initial);

    it('should be able to construct', (): void => {

        const clazz: Redux<any, any> = redux();

        // tslint:disable-next-line
        expect(clazz).to.be.exist;
    });
});
