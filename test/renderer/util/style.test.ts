/**
 * @author WMXPY
 * @namespace Renderer_Util
 * @description Style Test
 */

import { StyleBuilder } from '#R^util/style';
import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given a {StyleBuilder} class', (): void => {

    const chance: Chance.Chance = new Chance('renderer-util-style');

    it('should be able to construct', (): void => {

        const builder: StyleBuilder = StyleBuilder.init();

        // tslint:disable-next-line
        expect(builder).to.be.exist;
        expect(builder).to.be.instanceOf(StyleBuilder);
    });

    it('should be able build with array and rest classes', (): void => {
        const init: string = chance.string();
        const rest1: string = chance.string();
        const rest2: string = chance.string();

        const builder: StyleBuilder = StyleBuilder.init([init], rest1, rest2);

        expect(builder).to.be.lengthOf(3);
        expect(builder.build()).to.be.equal([init, rest1, rest2].join(' '));
    });

    it('should be able build with string and rest classes', (): void => {
        const init: string = chance.string();
        const rest1: string = chance.string();
        const rest2: string = chance.string();

        const builder: StyleBuilder = StyleBuilder.init(init, rest1, rest2);

        expect(builder).to.be.lengthOf(3);
        expect(builder.build()).to.be.equal([init, rest1, rest2].join(' '));
    });

    it('should be able build single class classes', (): void => {
        const init: string = chance.string();

        const builder: StyleBuilder = StyleBuilder.init(init);

        expect(builder).to.be.lengthOf(1);
        expect(builder.build()).to.be.equal(init);
    });

    it('should be able build init classes', (): void => {

        const classes: string[] = new Array(chance.natural({ max: 5 }))
            .fill(undefined).map(chance.string.bind(chance));

        const builder: StyleBuilder = StyleBuilder.init([...classes]);

        expect(builder).to.be.lengthOf(classes.length);
        expect(builder.build()).to.be.equal(classes.join(' '));
    });

    it('should be able build added classes', (): void => {

        const init: string = chance.string();
        const added: string = chance.string();

        const builder: StyleBuilder = StyleBuilder.init(init);
        builder.add(added);

        expect(builder).to.be.lengthOf(2);
        expect(builder.build()).to.be.equal([init, added].join(' '));
    });

    it('should be able build conditioned if classes', (): void => {

        const init: string = chance.string();
        const ifTrue: string = chance.string();
        const ifFalse: string = chance.string();

        const builder: StyleBuilder = StyleBuilder.init(init);
        builder.if(true, ifTrue).not(false, ifFalse);

        expect(builder).to.be.lengthOf(3);
        expect(builder.build()).to.be.equal([init, ifTrue, ifFalse].join(' '));
    });
});
