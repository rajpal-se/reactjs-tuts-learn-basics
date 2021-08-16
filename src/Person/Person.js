import React from "react";
const person = (props) => {
    let children;
    if(props.children) children = <p>{props.children}</p>;
    return (
        <div>
            <p>I am {props.name} and i am {props.age}</p>
            {children}
            <hr/>
        </div>
    );
}
export default person;

/* Note
1. "props.children" return "undefined", If no children are passed through component.
2. It is good to check that children elements exits or NOT.
   Else they prints nothing at the place of {props.children}.

*/

/* ------------------------------------------------------------------ */
/* Very Simple Functional Component

import React from "react";
const person = () => {
    return (
        <p>I am Max and i am 20</p>
        );
    }
export default person;

*/

/* ------------------------------------------------------------------ */
/* Accessing properties which are passed through Attribute values.

import React from "react";
const person = (props) => {
    return (
        <p>I am {props.name} and i am {props.age}</p>
    );
}
export default person;

*/

/* ------------------------------------------------------------------ */
/* Accessing "children" elements passed through components.

import React from "react";
const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and i am {props.age}</p>
            <p>{props.children}</p>
            <hr/>
        </div>
    );
}
export default person;

*/