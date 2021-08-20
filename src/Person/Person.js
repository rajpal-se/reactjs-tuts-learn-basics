import React from "react";
import Radium from "radium";

const person = (props) => {
    const paraStyle = {
        textAlign: "center",
        backgroundColor: "orange",
        "@media (max-width: 800px)": {
            color: "yellow",
            backgroundColor: "red"
        },
        "@media (max-width: 600px)": {
            color: "white",
            backgroundColor: "green"
        }
    };
    return (
        <div>
            <p style={paraStyle}>I am {props.name}</p>           
        </div>
    );
}
export default Radium(person);