/**
 * @author WMXPY
 * @namespace Hook
 * @description Sass-Hook
 */

import * as sass from 'node-sass';

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
