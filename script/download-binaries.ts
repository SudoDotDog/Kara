/**
 * @author WMXPY
 * @namespace Script
 * @description Download Binaries
 */

import * as Path from 'path';
import { download, touchDir } from './util/download';

(async () => {

    try {

        const binaryFolderDir: string = Path.join(__dirname, '..', 'binary');

        await touchDir(binaryFolderDir);

        const imageDir: string = Path.join(binaryFolderDir, 'tray.png');

        await download('https://i.ibb.co/tPZ9H3b/icon.png', imageDir);
    } catch (err) {

        console.log(err);
    }
})();
