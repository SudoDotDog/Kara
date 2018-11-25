/**
 * @author WMXPY
 * @namespace Provides_Util
 * @description Arguments
 */

import { COMMAND_DECLARE } from "#P/declare";

export const passThroughArguments = (current: COMMAND_DECLARE, next: COMMAND_DECLARE): COMMAND_DECLARE => {

    if (!current.arguments) {

        return next;
    }

    return {

        ...next,
        arguments: current.arguments,
    };
};
