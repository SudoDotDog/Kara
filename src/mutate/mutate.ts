/**
 * @author WMXPY
 * @namespace Mutate
 * @description Mutate
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE } from "#P/declare";
import { mutateCommandCommand, mutateCommandInput } from "./command/commands";
import { ImmediateCommandSideEffectFunction, MutatedCommandSideEffectFunction } from "./declare";
import { mutateImmediateScript } from "./immediate/immediate";
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
            case COMMAND_DECLARE_TYPE.INPUT: return mutateCommandInput(this._declare, input);
        }

        return createDefaultCommandMutateFunction(this._declare);
    }

    public immediate(): ImmediateCommandSideEffectFunction | null {

        switch (this._declare.type) {
            case COMMAND_DECLARE_TYPE.SCRIPT: return mutateImmediateScript(this._declare);
        }

        return null;
    }
}
