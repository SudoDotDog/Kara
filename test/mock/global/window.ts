/**
 * @author WMXPY
 * @namespace Mock
 * @description Window
 */

import * as Chance from 'chance';

export interface IMockWindowResult {

    called: string[];
}

export class MockWindow {

    public static get instance(): MockWindow {

        if (!this._instance) {
            this._instance = new MockWindow();
        }

        return this._instance;
    }

    private static _instance: MockWindow;

    private chance: Chance.Chance;

    private constructor() {

        this.chance = new Chance('mock-window');
    }

    public get location(): Partial<Location> {

        return {

            href: this.chance.string(),
        };
    }

    public flush(): IMockWindowResult {

        return {

            called: [],
        };
    }
}
