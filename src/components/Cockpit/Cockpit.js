import React, { useContext } from 'react';

import AuthContext from '../../context/authContext';

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
        }
      };
    
    const authContext = useContext(AuthContext);
    
    return (
      <div>
        <p style={style.paragraph}>
          Total Persons: <b>{authContext.persons.length}</b>
        </p>
        <h1 style={style.heading}>List of All Persons</h1>
        <p style={style.paragraph}>
            <button style={style.button} onClick={authContext.toggleShowPersons}>
                {props.showPersons? 'Hide List' : 'Show List'}
            </button>
        </p>
        <hr/>
      </div>
      /*
      <AuthContext.Consumer>
        {context => (
          <div>
            <p style={style.paragraph}>
              Total Persons: <b>{context.persons.length}</b>
            </p>
            <h1 style={style.heading}>List of All Persons</h1>
            <p style={style.paragraph}>
                <button style={style.button} onClick={context.toggleShowPersons}>
                    {props.showPersons? 'Hide List' : 'Show List'}
                </button>
            </p>
            <hr/>
          </div>
        )}
      </AuthContext.Consumer>
      */
    );
}

export default Cockpit;