/**
 * @author WMXPY
 * @namespace Config_Storage
 * @description File
 */

import * as Fs from 'fs';

export class StorageFile<T> {

    public static fromPath<T>(path: string): StorageFile<T> {

        return new StorageFile<T>(path);
    }

    private _path: string;

    private constructor(path: string) {

        this._path = path;
    }

    public async initialize(content: T): Promise<void> {

        return new Promise<void>((
            resolve: () => any,
            reject: (reason: any) => any,
        ) => {

            Fs.exists(this._path, (exists: boolean) => {

                if (exists) {
                    resolve();
                } else {

                    this.put(content).then((result: true) => {

                        if (result) {
                            resolve();
                        } else {
                            reject(null);
                        }
                    }).catch(reject);
                }
            });
        });
    }

    public put(content: T): Promise<true> {

        return new Promise<true>((
            resolve: (result: true) => any,
            reject: (reason: any) => any,
        ) => {

            const jsonified: string = JSON.stringify(content);
            Fs.writeFile(this._path, jsonified, 'utf8',
                (err: Error) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(true);
                    }
                });
        });
    }

    public get(): Promise<T> {

        return new Promise<T>((
            resolve: (content: T) => any,
            reject: (reason: any) => any,
        ) => {

            Fs.readFile(this._path, 'utf8',
                (err: Error, data: string) => {

                    if (err) {
                        reject(err);
                    } else {
                        const parsed: T = JSON.parse(data);
                        resolve(parsed);
                    }
                });
        });
    }
}
