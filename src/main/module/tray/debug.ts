/**
 * @author WMXPY
 * @namespace Main_Module_Tray
 * @description Debug
 */

import { MainProvider } from "#P/main/main";
import { dialog, MenuItemConstructorOptions, webContents } from "electron";

export const debugMenuFilter = (menu: MenuItemConstructorOptions[]): MenuItemConstructorOptions[] => {

    if (process.env.NODE_ENV === 'development') {

        return [
            {
                label: 'Debug',
                click: (): void => {

                    const information: string[][] = [
                        ['WebContents', webContents.getAllWebContents().length.toString()],
                        ['Provider', MainProvider.instance.length.toString()],
                    ];
                    dialog.showErrorBox('Debug', information.map((item: string[]) => item.join(': ')).join('\n'));
                },
            },
            {
                label: 'Checksum Provider',
                click: (): void => {

                    const mainProvider: MainProvider = MainProvider.instance;
                    mainProvider.flush();
                },
            },
            {
                type: 'separator',
            },
            ...menu,
        ];
    }

    return menu;
};
