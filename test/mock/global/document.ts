/**
 * @author WMXPY
 * @namespace Mock
 * @description Document
 */

export interface IMockDocumentResult {

    eventListeners: Map<string, (event: any) => void>;
}

export class MockDocument {

    public static get instance(): MockDocument {

        if (!this._instance) {
            this._instance = new MockDocument();
        }

        return this._instance;
    }

    private static _instance: MockDocument;

    private _eventListeners: Map<string, (event: any) => void>;

    private constructor() {

        this._eventListeners = new Map<string, (event: any) => void>();
    }

    public addEventListener(key: string, func: (event: any) => void): MockDocument {

        this._eventListeners.set(key, func);
        return this;
    }

    public flush(): IMockDocumentResult {

        return {

            eventListeners: this._eventListeners,
        };
    }
}
