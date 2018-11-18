/**
 * @author WMXPY
 * @namespace Renderer_Util
 * @description Style
 */

import { isArray, isString } from "util";

export class StyleBuilder {

    public static init(template?: string[] | string, ...rest: string[]) {

        if (isArray(template)) {

            return new StyleBuilder(template.concat(rest));
        }

        if (isString(template)) {

            return new StyleBuilder([template].concat(rest));
        }

        return new StyleBuilder([]);
    }

    private readonly _classes: string[];

    private constructor(init: string[]) {

        this._classes = init;
    }

    public get length(): number {

        return this._classes.length;
    }

    public add(className: string): StyleBuilder {

        this._classes.push(className);
        return this;
    }

    public if(statement: any, className: string): StyleBuilder {

        if (Boolean(statement)) {
            this.add(className);
        }
        return this;
    }

    public not(statement: any, className: string): StyleBuilder {

        return this.if(!Boolean(statement), className);
    }

    public build(): string {

        return this._classes.join(' ');
    }
}
