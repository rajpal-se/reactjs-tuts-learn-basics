import React from "react";
import './Person.css';

const person = (props) => {
    let children;
    if(props.children) children = <p>{props.children}</p>;

    return (
        <div className="Person">
            <p>I am {props.name} and i am {props.age}</p>
            <p><input type="text" onChange={props.change} value={props.name}/></p>
            {children}
        </div>
    );
}
export default person;