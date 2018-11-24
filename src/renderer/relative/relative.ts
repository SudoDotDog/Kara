/**
 * @author WMXPY
 * @namespace Renderer_Relative
 * @description Relative
 */

import { COMMAND_DECLARE } from "#P/declare";

export class Relative {

    public static declare(model: COMMAND_DECLARE): Relative {

        return new Relative(model);
    }

    private _model: COMMAND_DECLARE;

    private constructor(model: COMMAND_DECLARE) {

        this._model = model;
    }
}
