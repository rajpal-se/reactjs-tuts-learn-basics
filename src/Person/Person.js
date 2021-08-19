import React from "react";
import './Person.css';

const person = (props) => {
    let children;
    if(props.children) children = <p>{props.children}</p>;

    let classes = [];
    if(props.name.length > 3){
        classes.push('red');
    }
    if(props.name.length > 5){
        classes.push('bold');
    }

    return (
        <div className="Person">
            <p className={ classes.join(' ') }>I am {props.name} and i am {props.age}</p>
            <p><input type="text" onChange={props.change} value={props.name}/></p>
            {children}
        </div>
    );
}
export default person;