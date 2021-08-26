import React, { useRef } from 'react';

const Cockpit = props => {
    const style = {
        heading: {
          textAlign: "center",
          border: "1px solid gray",
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px"  
        },
        paragraph: {
          textAlign: "center"
        },
        button: {
          cursor: "pointer",
          padding: "10px 20px"
        },
        
      };
    
    const headingRef = useRef(null);

    return (
        <div>
            <p style={style.paragraph}>
              <button style={style.button} onClick={ () => { console.log(headingRef.current); } }>Console.log()</button>
            </p>
            <h1 style={style.heading} ref={headingRef}>List of All Persons</h1>
            <p style={style.paragraph}>
                <button style={style.button} onClick={props.clicked}>
                    {props.showPersons? 'Hide List' : 'Show List'}
                </button>
            </p>
            <hr/>
        </div>
    );
}

export default Cockpit;