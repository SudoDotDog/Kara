/**
 * @author WMXPY
 * @namespace Provide_Util
 * @description Nearest
 */

import { ICommand } from "#P/declare";
import { _Map, _String } from "@sudoo/bark";

export const findNearestCommand = (commandMap: { [key: string]: ICommand; }, command: string): {
    command: ICommand;
    length: number;
} => {

    const result: {
        command: ICommand;
        length: number;
    } = _Map.keys(commandMap).reduce<any>(
        (nearest: { command: ICommand; length: number; }, key: string) => {

            const current: ICommand = commandMap[key];
            const target: string = current.command;

            const distance: number = _String
                .compare(command)
                .with(target)
                .unsensitiveContain(15)
                .length(3)
                .distance;

            if (distance < nearest.length) {

                return {
                    command: current,
                    length: distance,
                };
            }

            return nearest;
        }, { command: null, length: Infinity });

    return result;
};
