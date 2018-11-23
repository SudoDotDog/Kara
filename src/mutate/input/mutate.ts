/**
 * @author WMXPY
 * @namespace Mutate
 * @description Mutate
 */

import { COMMAND_DECLARE } from "#P/declare";

export class MutateInput {

    public static declare(declare: COMMAND_DECLARE): MutateInput {

        return new MutateInput(declare);
    }

    private _declare: COMMAND_DECLARE;

    private constructor(declare: COMMAND_DECLARE) {

        this._declare = declare;
    }

    public declare(input: string): COMMAND_DECLARE {

        return this._declare;
    }

    public input(previous: string): string {

        return previous;
    }
}
