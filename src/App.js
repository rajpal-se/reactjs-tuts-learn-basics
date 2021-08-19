import './App.css';
import React, {useState} from 'react';
import Person from './Person/Person';

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: "Max", age: "20"},
      {name: "John", age: "29"},
      {name: "Brainly", age: "19"}
    ]
  });
  const [otherState, setOtherState] = useState({
    otherStateText: "This is the other state"
  });
  
  const onChangeHandler = (index, event) => {
    let newPersonState = {...personState};
    newPersonState.persons[index].name = event.target.value;
    setPersonState(newPersonState);
  }

  let headingStyle = {
    color: "white",
    textShadow: "1px 1px 2px black",
    border: "1px solid gray",
    borderRadius: "20px",
    display: "inline-block",
    margin: "5px auto",
    padding: "20px 40px",
    backgroundColor: "#dddddd"
  };

  return (
    <div className="App">
      <h1 style={headingStyle}>Person Details</h1>
      <Person
        change={onChangeHandler.bind(this, 0)}
        name={personState.persons[0].name}
        age={personState.persons[0].age}/>
      <Person
        change={onChangeHandler.bind(this, 1)}
        name={personState.persons[1].name}
        age={personState.persons[1].age}>He is a Good person</Person>
      <Person
        change={onChangeHandler.bind(this, 2)}
        name={personState.persons[2].name}
        age={personState.persons[2].age}/>
    </div>
  );
}
export default App;

/* Note
1. Using "css" file and import this file in any JS file of the application
    - This "style" is "Globally" available. (It is NOT Scoped)
    - hover, active, etc effect are possible.
    - During import file extension ".css" is required.
    - "css" imported files handled separately by WebPack.

2. Inline Styling, JSX provides "style" attribute, which accepts JS object of css properties
    - This "style" is Scoped to only one element.
        1. const style = { css... }
            <div style={style} >
        2. <div style={ { css... } } >
    - NOT possible (hover, active, etc effect).

3. using "css modules" e.g: rename css/sass/scss files as
    - style.module.css
    - style.module.scss
    - style.module.sass

    Note: Before "react-scripts@2.0.0", use "npm run eject" and follow its steps.

    
4. Using Third party package.
    ex: Radium


*/