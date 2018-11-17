/**
 * @author WMXPY
 * @namespace Components
 * @description Decorate
 */

import * as styleDecorate from '#S/components/decorate.sass';
import * as React from "react";

export const KeyTooltip = (props: {
    text: string;
}): JSX.Element => {

    return (
        <div className={styleDecorate.keyTooltip}>
            {props.text}
        </div>
    );
};
