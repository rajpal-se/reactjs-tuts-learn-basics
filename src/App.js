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

  personState.persons.forEach(person => {
    if(person.name.length > 6){
      headingStyle.color = 'green';
      headingStyle.textShadow = '1px 1px 2px white';
    }
  });

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