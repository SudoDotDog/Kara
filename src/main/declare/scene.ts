/**
 * @author WMXPY
 * @namespace Declare
 * @description Scene
 */

export interface IScene {

    create: () => IScene;
    remove: () => IScene;
    exist: () => boolean;
    show: () => IScene;
    hide: () => IScene;
}
