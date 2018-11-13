/**
 * @author WMXPY
 * @namespace Main_Module_Tray
 * @description Debug
 */

import { MenuItemConstructorOptions, WebContents } from "electron";

export const debugMenuFilter = (menu: MenuItemConstructorOptions[]): MenuItemConstructorOptions[] => {

    if (process.env.NODE_ENV === 'development') {

        return [
            {
                label: 'Debug',
                click: (): void => {

                    console.log('WebContents: ', WebContents.getAllWebContents().length);
                },
            },
            ...menu,
        ];
    }

    return menu;
};
