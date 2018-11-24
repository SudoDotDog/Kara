/**
 * @author WMXPY
 * @namespace Renderer_Relative
 * @description Model
 */

import { COMMAND_DECLARE } from "#P/declare";

export class RelativeModel {

    public static declare(model: COMMAND_DECLARE): RelativeModel {

        return new RelativeModel(model);
    }

    private _model: COMMAND_DECLARE;

    private constructor(model: COMMAND_DECLARE) {

        this._model = model;
    }
}
