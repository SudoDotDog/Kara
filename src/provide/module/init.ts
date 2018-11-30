/**
 * @author WMXPY
 * @namespace Provides
 * @description Init
 */

import { MainProvider } from "#P/main/main";
import { createDoneCommandDeclare } from "#P/util/declare";
import { COMMAND_DECLARE_TYPE } from "../declare";
import { Provider } from "../renderer";

export const initRendererProvider = (): void => {
    Provider.init();
    console.log('init renderer provider');
};

export const initMainProvider = (): void => {

    const provider: MainProvider = MainProvider.instance;
    if (!provider.isEmpty()) {
        return;
    }

    provider
        .register({
            name: 'google',
            command: 'google',
            key: 'g',
            description: 'google',
            declare: {
                type: COMMAND_DECLARE_TYPE.INPUT,
                variable: 'search',
                next: {
                    type: COMMAND_DECLARE_TYPE.SCRIPT,
                    script: `import {openExternal} from 'io';import {search} from 'arguments';openExternal('https://google.com/search?q=' + search)`,
                    next: createDoneCommandDeclare(),
                },
            },
        }).register({
            name: 'someLongName',
            command: 'someLongName',
            key: 's',
            description: 'google',
            declare: {
                type: COMMAND_DECLARE_TYPE.SCRIPT,
                script: `import {openExternal} from 'io';openExternal('https://google.com')`,
                next: createDoneCommandDeclare(),
            },
        }).flush();

    return;
};
