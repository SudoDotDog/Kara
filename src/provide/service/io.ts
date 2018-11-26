/**
 * @author WMXPY
 * @namespace Provides_Service
 * @description IO
 */

import { ConnorError } from 'connor';
import { shell } from 'electron';

export const getUserInput = (): Promise<string> => {

    return new Promise<string>((resolve: (input: string) => void, reject: (err: ConnorError) => void) => {

        resolve('test');
    });
};

export const openExternal = async (url: string): Promise<void> => {

    shell.openExternal(url);
    return;
};

export const buildURL = async (domain: string, query: any): Promise<string> => {

    console.log(domain, query);
    return domain;
};
