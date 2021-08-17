import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: "20"},
      {name: "John", age: "29"},
      {name: "Cia", age: "19"}
    ],
    otherState: "This is the other state"
  };
  
  changeDataHandler = () => {
    this.setState({
      persons: [
        {name: "Mandy", age: "25"},
        {name: "Jerry", age: "16"},
        {name: "Bucky", age: "22"}
      ]
    });
  }

  render(){
    return (
      <div className="App">
        <h1>Person Details</h1>
        <p><button onClick={this.changeDataHandler}>Change Data</button></p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>He is a Good person</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}
export default App;

/* Note
1. To create class based component, first import "Component" from "react".
    And create a class that extends component class.
2. "state" is reserved property for class based component
3. "setState()" function is used to update the State of Class Based Component
    This function merge the old state with new state, It donot replace old state.
4. onClick={this.changeDataHandler}
    Here we are passing the reference to "this.changeDataHandler" function and This is the correct way.

    onClick={this.changeDataHandler()}
    Here we have called the function at this point. and which we Don't need.
5. In HTML we use "onclick", But here we used "onClick" Beacuse it JSX, not HTML

*/