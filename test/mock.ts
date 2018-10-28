/**
 * @author WMXPY
 * @namespace Hook
 * @description Sass-Hook
 */

import * as sass from 'node-sass';

const registerSass = () => {

    require.extensions['.sass'] = (module: NodeModule, filename: string) => {
        console.log(sass.renderSync({
            file: filename,
        }).css.toString());
        module.exports = {
            a: 1,
        };
    };
};

registerSass();
