/**
 * @author WMXPY
 * @namespace Provides
 * @description IO
 */

import { ConnorError } from 'connor';

export const getUserInput = (): Promise<string> => {

    return new Promise<string>((resolve: (input: string) => void, reject: (err: ConnorError) => void) => {
        resolve('test');
    });
};
