/**
 * @author WMXPY
 * @namespace Script_Util
 * @description Rmrf
 */

import * as Fs from 'fs';
import * as Path from 'path';

export const rmRFFolderSync = (targetFolder: string): string[] => {

    const folder: string = Path.resolve(targetFolder);
    const result: string[] = [];
    const recursiveRemove = (path: string): void => {

        if (Fs.statSync(path).isDirectory()) {

            const fileOrDirectory: string[] = Fs.readdirSync(path);
            for (let fod of fileOrDirectory) {

                recursiveRemove(Path.join(path, fod));
            }
            Fs.rmdirSync(path);
        } else {

            result.push(path);
            Fs.unlinkSync(path);
        }
    };

    recursiveRemove(folder);
    return result;
};
