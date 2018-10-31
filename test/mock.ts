/**
 * @author WMXPY
 * @namespace Hook
 * @description Sass-Hook
 */

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as ModuleAlias from 'module-alias';
import * as sass from 'node-sass';
import * as Path from 'path';

const registerEnzyme = (): void => {

    configure({
        adapter: new Adapter(),
    });
};

const registerSass = (): void => {

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

const registerBinding = () => {

    const src: string = Path.join(__dirname, '..', 'src');
    ModuleAlias.addAliases({
        "#R~execute": Path.join(src, 'renderer', 'scene', 'execute'),
    });
};

registerSass();
registerEnzyme();
registerBinding();
