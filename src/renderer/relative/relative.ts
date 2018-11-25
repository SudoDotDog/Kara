/**
 * @author WMXPY
 * @namespace Renderer_Relative
 * @description Relative
 */

import { CommandDeclare, COMMAND_DECLARE_TYPE } from "#P/declare";
import { PanelComponent } from "../declare/relative";
import { CommandDeclareTooltip } from "./panel/command";
import { ErrorDeclareTooltip, InputDeclareTooltip } from "./panel/info";

export class Relative {

    public static declare(model: CommandDeclare): Relative {

        return new Relative(model);
    }

    private _model: CommandDeclare;

    private constructor(model: CommandDeclare) {

        this._model = model;
    }

    public get type(): COMMAND_DECLARE_TYPE {

        return this._model.type;
    }

    public toolTip(): PanelComponent {

        switch (this._model.type) {

            case COMMAND_DECLARE_TYPE.COMMAND: return CommandDeclareTooltip;
            case COMMAND_DECLARE_TYPE.ERROR: return ErrorDeclareTooltip;
            case COMMAND_DECLARE_TYPE.INPUT: return InputDeclareTooltip;
        }

        return ErrorDeclareTooltip;
    }
}
