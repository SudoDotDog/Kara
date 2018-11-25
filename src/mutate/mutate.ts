/**
 * @author WMXPY
 * @namespace Mutate
 * @description Mutate
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE } from "#P/declare";
import { mutateCommandCommand } from "./command/commands";
import { MutatedCommandSideEffectFunction } from "./declare";
import { mutateInputCommand } from "./input/inputs";
import { createDefaultCommandMutateFunction } from "./util/default";

export class Mutate {

    public static declare(declare: COMMAND_DECLARE): Mutate {

        return new Mutate(declare);
    }

    private _declare: COMMAND_DECLARE;

    private constructor(declare: COMMAND_DECLARE) {

        this._declare = declare;
    }

    public input(previous: string): string {

        switch (this._declare.type) {

            case COMMAND_DECLARE_TYPE.COMMAND: return mutateInputCommand(previous);
        }
        return previous;
    }

    public command(input: string): MutatedCommandSideEffectFunction {

        switch (this._declare.type) {

            case COMMAND_DECLARE_TYPE.COMMAND: return mutateCommandCommand(this._declare, input);
        }

        return createDefaultCommandMutateFunction(this._declare);
    }
}
