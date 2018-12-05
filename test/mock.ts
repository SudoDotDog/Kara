/**
 * @author WMXPY
 * @namespace Hook
 * @description Sass-Hook
 */

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as ModuleAlias from 'module-alias';
import * as Sass from 'node-sass';
import * as Path from 'path';
import { registerConnor } from '../src/main/declare/error';
import { registerUnitTestConnor } from './declare/error';
import { MockDocument } from './mock/global/document';
import { MockWindow } from './mock/global/window';

const registerEnzyme = (): void => {

    configure({
        adapter: new Adapter(),
    });
};

const registerSass = (): void => {

    require.extensions['.sass'] = (module: NodeModule, filename: string) => {
        const css: string = Sass.renderSync({

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

const registerElectron = (): void => {

    const test: string = Path.join(__dirname, '..', 'test');

    ModuleAlias.addAliases({

        electron: Path.join(test, 'mock', 'global', 'electron.ts'),
    });
};

const registerBinding = () => {

    const src: string = Path.join(__dirname, '..', 'src');

    ModuleAlias.addAliases({

        "#C": Path.join(src, 'config'),
        "#M": Path.join(src, 'main'),
        "#P": Path.join(src, 'provide'),
        "#S": Path.join(__dirname, '..', 'style'),
        "#U": Path.join(src, 'mutate'),
        "#R^components": Path.join(src, 'renderer', 'components'),
        "#R^declare": Path.join(src, 'renderer', 'declare'),
        "#R^relative": Path.join(src, 'renderer', 'relative'),
        "#R^util": Path.join(src, 'renderer', 'util'),
        "#R~center": Path.join(src, 'renderer', 'scene', 'center'),
        "#R~execute": Path.join(src, 'renderer', 'scene', 'execute'),
        "#R~scepter": Path.join(src, 'renderer', 'scene', 'scepter'),
    });
};

const registerGlobal = () => {

    (global as any).document = MockDocument.instance;
    (global as any).window = MockWindow.instance;
};

const registerTestConnor = () => {

    registerUnitTestConnor();
    registerConnor();
};

registerSass();
registerElectron();
registerEnzyme();
registerBinding();
registerGlobal();
registerTestConnor();
