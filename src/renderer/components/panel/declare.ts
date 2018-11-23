/**
 * @author WMXPY
 * @namespace Components_Panel
 * @description Declare
 */

import { Provider } from "#P/renderer";

export interface IComponentsPanelProps {

    input: string;
    command: string | null;
    provider: Provider;
}
