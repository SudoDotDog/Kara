/**
 * @author WMXPY
 * @namespace Main_Module_Provider
 * @description Provider
*/

import { MainProvider } from "#P/main";

export const bindingMainProvider = (): void => {

    const mainProvider: MainProvider = MainProvider.instance;
    mainProvider.init();
    return;
};
