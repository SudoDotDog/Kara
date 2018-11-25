/**
 * @author WMXPY
 * @namespace Mutate
 * @description Declare
 */

import { COMMAND_DECLARE } from "#P/declare";

export type MutatedCommandSideEffectFunction = () => Promise<COMMAND_DECLARE>;
