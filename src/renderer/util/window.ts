/**
 * @author WMXPY
 * @namespace Renderer_Util
 * @description Util
 */

export const mockWindow = (window: Window) => {

    window.ondragover = (e: DragEvent) => {

        e.preventDefault();
        return false;
    };

    window.ondrop = (e: DragEvent) => {

        e.preventDefault();
        return false;
    };
};
