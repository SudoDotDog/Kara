/**
 * @author WMXPY
 * @namespace Scene_Execute
 * @description Menu template
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
