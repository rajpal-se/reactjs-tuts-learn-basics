import React from 'react';

const person = (props) => {
    const style = {
        paragraph: {
            border: "1px solid gray",
            padding: "10px 20px",
            position: "relative",
            borderRadius: "10px",
            backgroundColor: "#fafafa"
        },
        button: {
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
        }
    };

    return (
        <p style={style.paragraph}>
            I am <b>{props.name}</b>
            <button
                style={style.button}
                onClick={e => props.deleted.call(this, props.id, e)}>X</button>
        </p>
    );
}
export default person;