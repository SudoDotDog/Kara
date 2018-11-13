/**
 * @author WMXPY
 * @namespace Provides_Util
 * @description Crypto
 */

import { createHash, Hash } from 'crypto';

export const md5Encode = (content: any): string => {

    const encoder: Hash = createHash('md5');
    const message: string = content.toString();

    return encoder.update(message, 'utf8').digest('hex');
};

export const compareMd5Context = (encoded: string, content: any): boolean => {

    const message: string = md5Encode(content);
    return message === encoded;
};
