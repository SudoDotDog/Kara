/**
 * @author WMXPY
 * @namespace Provides
 * @description Marked
 */

import { ICommandArguments } from '#P/declare';
import { Marked, MarkedResult } from '@sudoo/marked';
import { buildURL, openExternal } from '../service/io';

export const executeScript = (script: string, args: ICommandArguments = {}): Promise<MarkedResult> => {
    return Marked(script, {
        provides: {
            io: {
                openExternal,
            },
            util: {
                buildURL,
            },
            arguments: args,
        },
    });
};
