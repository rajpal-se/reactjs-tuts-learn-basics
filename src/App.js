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
  
  const changeDataHandler = () => {
    setPersonState({
      persons: [
        {name: "Mandy", age: "25"},
        {name: "Jerry", age: "16"},
        {name: "Bucky", age: "22"}
      ]
    });
  }
  return (
    <div className="App">
      <h1>Person Details</h1>
      <p><button onClick={changeDataHandler}>Change Data</button></p>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>He is a Good person</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
}
export default App;

/* Note
1. To manage "state" in function based component, use hook which is "useState()"
    and it is imported from "React" package.
2. You can use "useState()" as many times
3. This function returns 2 elements.
    i.   First is the "State", What we just passed through it.
    ii.  Second is the "function" to update this old state and informs to React to re-render the new state.
      Note: This (ii) function replace the old state with new one. Keep in mind, It don't merge.
      that is why we have to define different states separately using "useState()" multiple times.
4. We can define function inside function.

*/