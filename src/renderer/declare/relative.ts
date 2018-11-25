/**
 * @author WMXPY
 * @namespace Renderer_Declare
 * @description Relative
 */

import { Provider } from "#P/renderer";
import { SFC } from "react";

export interface IComponentsPanelProps {

    input: string;
    command: string | null;
    provider: Provider;
}

export type PanelComponent = SFC<IComponentsPanelProps>;
