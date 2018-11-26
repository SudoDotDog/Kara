/**
 * @author WMXPY
 * @namespace Script
 * @description Bump Version
 */

import * as Fs from 'fs';
import * as Path from 'path';
import { compareVersion, IPackageVersion, readVersion, writeVersion } from './util/version';

const packagePath: string = Path.join(__dirname, '..', 'package.json');
const appPackagePath: string = Path.join(__dirname, '..', 'app', 'package.json');

const parsedPackage: {
    [key: string]: any;
    version: string;
} = JSON.parse(Fs.readFileSync(packagePath, 'utf8'));

const parsedAppPackage: {
    [key: string]: any;
    version: string;
} = JSON.parse(Fs.readFileSync(appPackagePath, 'utf8'));

const packageVersion: IPackageVersion = readVersion(parsedPackage.version);
const appPackageVersion: IPackageVersion = readVersion(parsedAppPackage.version);

if (!compareVersion(packageVersion, appPackageVersion)) {

    throw new Error('App version and Root version not equal');
}

const newVersion: IPackageVersion = {
    ...packageVersion,
    fix: packageVersion.fix + 1,
};

const stringifiedPackage: string = JSON.stringify({
    ...parsedPackage,
    version: writeVersion(newVersion),
}, null, "\t");

const stringifiedAppPackage: string = JSON.stringify({
    ...parsedAppPackage,
    version: writeVersion(newVersion),
}, null, "\t");

Fs.writeFileSync(packagePath, stringifiedPackage, 'utf8');
Fs.writeFileSync(appPackagePath, stringifiedAppPackage, 'utf8');
