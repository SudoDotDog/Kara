/**
 * @author WMXPY
 * @namespace Provides
 * @description Init
 */

import { COMMAND_DECLARE_TYPE } from "./declare";
import { Provider } from "./provider";

export const initProvider = (): void => {

    const provider: Provider = Provider.instance;
    if (!provider.isEmpty) {
        return;
    }

    provider.register({
        name: 'google',
        command: 'google',
        key: 'g',
        description: 'google',
        declare: {
            type: COMMAND_DECLARE_TYPE.SCRIPT,
            script: `import {openExternal} from 'io';openExternal('https://google.com')`,
        },
    });

    return;
};
