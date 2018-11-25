/**
 * @author WMXPY
 * @namespace Mutate
 * @description Mutate
 */

import { CommandDeclare, COMMAND_DECLARE_TYPE } from "#P/declare";
import { mutateInputCommand } from "./inputs";

export class MutateInput {

    public static declare(declare: CommandDeclare): MutateInput {

        return new MutateInput(declare);
    }

    private _declare: CommandDeclare;

    private constructor(declare: CommandDeclare) {

        this._declare = declare;
    }

    public input(previous: string): string {

        switch (this._declare.type) {

            case COMMAND_DECLARE_TYPE.COMMAND: return mutateInputCommand(previous);
        }
        return previous;
    }
}
