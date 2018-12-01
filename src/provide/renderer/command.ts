/**
 * @author WMXPY
 * @namespace Provides
 * @description Command
 */

import { ICommand } from "#P/declare";
import { createDoneCommandDeclare } from "#P/util/declare";

export const initialCommand = (): ICommand => ({

    command: '',
    description: '',
    declare: createDoneCommandDeclare(),
    key: '',
    name: '',
});
