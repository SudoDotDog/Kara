/**
 * @author WMXPY
 * @namespace Mutate
 * @description Mutate
 */

import { COMMAND_DECLARE, COMMAND_DECLARE_TYPE } from "#P/declare";
import { mutateInputCommand } from "./inputs";

export class MutateInput {

    public static declare(declare: COMMAND_DECLARE): MutateInput {

        return new MutateInput(declare);
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
}
