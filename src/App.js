import React from 'react';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

const App = () => {
  const headingStyle = {
    textAlign: "center",
    border: "1px solid gray",
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    cursor: "pointer",
    ":hover": {
      color: "white",
      backgroundColor: "black"
    }
  };
  return (
    <StyleRoot>
      <div>
        <h1 style={headingStyle}>List of All Persons</h1>
        <Person name="Max"/>
        <Person name="Rock"/>
        <Person name="Ryan"/>
      </div>
    </StyleRoot>
  );
}
export default Radium(App);

/* Note:
1. If you want to use [media query, keyframes] in any of the component, then you must
    wrap your top-level App component with <StyleRoot>.
2. media queries and keyframes may be used in any of the child component,
    But you wrap only Root component of your App.
3. "export default Radium(<component-name>)" is Always must.
    <component-name> is the component in which radium styling is used.


    [Media query is used Person Component.]
*/