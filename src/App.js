import './App.css';
import React, {useState} from 'react';
import Person from './Person/Person';

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: "Max", age: "20"},
      {name: "John", age: "29"},
      {name: "Cia", age: "19"}
    ]
  });
  const [otherState, setOtherState] = useState({
    otherStateText: "This is the other state"
  });
  
  const onChangeHandler = (index, event) => {
    // console.log(this);     // undefined
    // console.log(index, event);
    let newPersonState = {...personState};
    newPersonState.persons[index].name = event.target.value;
    setPersonState(newPersonState);
  }
  return (
    <div className="App">
      <h1>Person Details</h1>
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

/* 
1. Passing function reference only
    change={ myHandler }

2. Passing function reference WITH Arguments.
    Method 1: Recommended (using bind method)
    change={ myHandler.bind(this, arg_1, arg_2, ..., arg_n) }
    
    Method 2: Inefficient way
    change={ () => myHandler(arg_1, arg_2, ..., arg_n) }

    Note: event will be the last argument
    const handler = (arg_1, arg_2, ..., arg_n, event) => {
      // code...
    }
*/