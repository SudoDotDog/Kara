/**
 * @author WMXPY
 * @namespace Script_Util
 * @description Download
 */

import * as Fs from 'fs';
import * as Http from 'http';
import * as Https from 'https';

export const download = async (url: string, dist: string): Promise<void> =>
    url.substring(0, 5) === 'https' ? downloadHttps(url, dist) : downloadHttp(url, dist);

export const downloadHttp = async (url: string, dist: string): Promise<void> =>
    new Promise<void>((resolve: () => void, reject: (reason: Error) => void) => {

        const file: Fs.WriteStream = Fs.createWriteStream(dist);
        const request: Http.ClientRequest = Http.get(url, (response: Http.IncomingMessage) => response.pipe(file));

        file.on('finish', () => {
            file.close();
            resolve();
        });
        file.on('error', (reason: Error) => Fs.unlink(dist, () => reject(reason)));
        request.on('error', (reason: Error) => Fs.unlink(dist, () => reject(reason)));
    });

export const downloadHttps = async (url: string, dist: string): Promise<void> =>
    new Promise<void>((resolve: () => void, reject: (reason: Error) => void) => {

        const file: Fs.WriteStream = Fs.createWriteStream(dist);
        const request: Http.ClientRequest = Https.get(url, (response: Http.IncomingMessage) => response.pipe(file));

        file.on('finish', () => {
            file.close();
            resolve();
        });
        file.on('error', (reason: Error) => Fs.unlink(dist, () => reject(reason)));
        request.on('error', (reason: Error) => Fs.unlink(dist, () => reject(reason)));
    });

export const touchDir = async (path: string): Promise<void> =>
    new Promise<void>((resolve: () => void, reject: (reason: Error) => void) =>
        Fs.exists(path, (exists: boolean) => {

            if (exists) {

                resolve();
            } else {
                Fs.mkdir(path, (err: Error) => {

                    if (err) {
                        reject(err);
                    }

                    resolve();
                });
            }
        }));
