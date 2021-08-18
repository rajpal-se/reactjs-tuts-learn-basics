import React from "react";
const person = (props) => {
    let children;
    if(props.children) children = <p>{props.children}</p>;
    return (
        <div>
            <p>I am {props.name} and i am {props.age}</p>
            <p><input type="text" onChange={props.change} value={props.name}/></p>
            {children}
            <hr/>
        </div>
    );
}
export default person;