/**
 * @author WMXPY
 * @namespace Main_Module_Menu
 * @description Template
 */

export const menuTemplate: any = [
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'pasteandmatchstyle' },
            { role: 'delete' },
            { role: 'selectall' },
        ],
    },
    {
        role: 'window',
        submenu: [
            { role: 'close' },
        ],
    },
];
