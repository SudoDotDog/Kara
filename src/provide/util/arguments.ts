/**
 * @author WMXPY
 * @namespace Provides_Util
 * @description Arguments
 */

import { COMMAND_DECLARE, ICommandArguments } from "#P/declare";
import { _Map } from "@sudoo/bark/map";

export const passThroughArguments = (current: COMMAND_DECLARE, next: COMMAND_DECLARE): COMMAND_DECLARE => {

    if (!current.arguments) {

        return next;
    }

    return {

        ...next,
        arguments: current.arguments,
    };
};

export const extendThroughArguments = (current: COMMAND_DECLARE, next: COMMAND_DECLARE, extendArguments: ICommandArguments): COMMAND_DECLARE => {

    if (!current.arguments) {

        return {
            ...next,
            arguments: extendArguments,
        };
    }

    return {
        ...next,
        arguments: {
            ...current.arguments,
            ...extendArguments,
        },
    };
};

export const checkArgumentExist = (args: ICommandArguments, variable: string): boolean => _Map.keys(args as Record<string, string>).includes(variable);
