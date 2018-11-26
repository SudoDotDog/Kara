/**
 * @author WMXPY
 * @namespace Script_Util
 * @description Version
 */

export interface IPackageVersion {

    readonly major: number;
    readonly minor: number;
    readonly fix: number;
}

export const readVersion = (version: string): IPackageVersion => {

    const [major, minor, fix] = version.split('.');
    return {
        major: Number(major),
        minor: Number(minor),
        fix: Number(fix),
    };
};

export const writeVersion = (version: IPackageVersion): string => {

    return `${version.major}.${version.minor}.${version.fix}`;
};

export const compareVersion = (base: IPackageVersion, target: IPackageVersion): boolean => {

    return base.fix === target.fix
        && base.minor === target.minor
        && base.major === target.major;
};
