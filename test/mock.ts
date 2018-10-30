/**
 * @author WMXPY
 * @namespace Hook
 * @description Sass-Hook
 */

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as sass from 'node-sass';

const registerEnzyme = () => {

    configure({
        adapter: new Adapter(),
    });
};

const registerSass = () => {

    require.extensions['.sass'] = (module: NodeModule, filename: string) => {
        const css: string = sass.renderSync({
            file: filename,
        }).css.toString();

        const matches: string[] | null = css.match(/\.\S+ {/g);
        if (!matches) {
            module.exports = {};
            return;
        }

        const result: {
            [key: string]: string;
        } = {};
        matches.forEach((current: string) => {
            const text: string = current.split(' ')[0];
            const value: string = text.substring(1, text.length);
            result[value] = value;
        });
        module.exports = result;
    };
};

registerSass();
registerEnzyme();
