/**
 * @author WMXPY
 * @namespace Provides
 * @description Init
 */

import { Provider } from "../renderer/renderer";

export const initRendererProvider = (): void => {
    Provider.init();
    console.log('init renderer provider');
};
