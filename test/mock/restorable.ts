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

    private _restoreFunction: () => void;

    private constructor(mock: (func: (...args: any[]) => any) => void, restore: () => void) {

        this._called = [];
        this._returnWith = undefined;

        mock(this._mockFunction.bind(this));
        this._restoreFunction = restore;
    }

    public called(): string[] {

        return this._called;
    }

    public thenReturn(returnWith: any): Restorable {

        this._returnWith = returnWith;
        return this;
    }

    public restore(): Restorable {

        this._restoreFunction();
        return this;
    }

    private _mockFunction(...args: any[]): any {

        this._called.push(args.map((arg: any) => arg.toString()).join(', '));
        return this._returnWith;
    }
}
