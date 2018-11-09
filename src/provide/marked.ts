/**
 * @author WMXPY
 * @namespace Provides
 * @description Marked
 */

import { Marked, MarkedResult } from '@sudoo/marked';
import { openExternal } from './service/io';

export const executeScript = (script: string, args: string[] = []): Promise<MarkedResult> => {
    return Marked(script, {
        provides: {
            io: {
                openExternal,
            },
            args,
        },
    });
};
