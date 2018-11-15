/**
 * @author WMXPY
 * @namespace Mock
 * @description Restorable
 */

import Connor from "connor";
import { UNIT_TEST_ERROR_CODE, UNIT_TEST_MODULE_NAME } from "../declare/error";

export class Restorable {

    public static mock(clazz: any, element: string): Restorable {

        if (!clazz || !clazz[element]) {
            throw Connor.getErrorCreator(UNIT_TEST_MODULE_NAME)
                (UNIT_TEST_ERROR_CODE.UNABLE_TO_MOCK_ABSENT_FUNCTION, element);
        }

        const store: any = clazz[element];

        const mock = (func: (...args: any[]) => any): void => {

            clazz[element] = func;
        };

        const restore = (): void => {

            clazz[element] = store;
        };

        return new Restorable(mock, restore);
    }

    private _called: string[];
    private _returnWith: any;
    private _restored: boolean;

    private _restoreFunction: () => void;
    private _mockFunction: (func: (...args: any[]) => any) => void;

    private constructor(mock: (func: (...args: any[]) => any) => void, restore: () => void) {

        this._called = [];
        this._returnWith = undefined;
        this._restored = false;

        this._mockFunction = mock;
        mock(this._onCall.bind(this));
        this._restoreFunction = restore;
    }

    public called(): string[] {

        if (this._restored) {
            return this._called;
        }

        throw Connor.getErrorCreator(UNIT_TEST_MODULE_NAME)
            (UNIT_TEST_ERROR_CODE.CANNOT_READ_CALLED_BEFORE_RESTORE);
    }

    public thenReturn(returnWith: any): Restorable {

        this._returnWith = returnWith;
        return this;
    }

    public with(func: (...args: any[]) => any): Restorable {

        if (this._restored) {
            throw Connor.getErrorCreator(UNIT_TEST_MODULE_NAME)
                (UNIT_TEST_ERROR_CODE.CANNOT_REPLACE_AFTER_RESTORE);
        }

        const onCall: (...args: any[]) => any = this._createOnCall(func);
        this._mockFunction(onCall.bind(this));
        return this;
    }

    public restore(): Restorable {

        this._restored = true;
        this._restoreFunction();
        return this;
    }

    private _onCall(...args: any[]): any {

        this._called.push(args.map((arg: any) => arg.toString()).join(', '));
        return this._returnWith;
    }

    private _createOnCall(func: (...args: any[]) => any): (...args: any[]) => any {

        return (...args: any[]): any => {

            this._called.push(args.map((arg: any) => arg.toString()).join(', '));
            return func(...args);
        };
    }
}
