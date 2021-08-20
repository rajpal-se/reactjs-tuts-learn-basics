import React from "react";

const person = (props) => {
    const paraStyle = {
        border: "1px solid gray",
        padding: "10px 20px",
        position: "relative",
        borderRadius: "10px",
        backgroundColor: "#fafafa"
    };
    const buttonStyle = {
        position: "absolute",
        right: "10px",
        top: "7px",
        marginBottom: "-50%",
        fontWeight: "bold",
        backgroundColor: "red",
        padding: "4px 8px",
        cursor: "pointer",
        color: "white",
        borderColor: "orange"
    };
    return (
        <p style={paraStyle}>
            I am <b>{props.name}</b>
            <button style={buttonStyle} onClick={e => props.deleteHandler.call(this, props.id, e)}>X</button>
        </p>
    );
}
export default person;