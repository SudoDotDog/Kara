/**
 * @author WMXPY
 * @namespace Declare
 * @description Scene
 */

export interface IScene {

    isCreated: boolean;

    create: () => IScene;
    remove: () => IScene;
    exist: () => boolean;
    trigger: () => IScene;

    show: () => IScene;
    hide: () => IScene;

    focus: () => IScene;
    blur: () => IScene;

    createOrFocus: () => IScene;
}
