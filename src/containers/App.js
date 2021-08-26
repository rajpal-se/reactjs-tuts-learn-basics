import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';


class App extends Component{

  constructor(props){
    super(props);
    this.showCockpitBtnRef = React.createRef(null);
  }

  state = {
    persons: [
      {id: "id_1", name: "Max"},
      {id: "id_2", name: "John"},
      {id: "id_3", name: "Andrew"},
      // {id: "id_4", name: "Jackson"},
      // {id: "id_5", name: "James"}
    ],
    showCockpit: false,
    showPersons: false
  }

  toggleShowCockpit = () => {
    this.setState({showCockpit: !this.state.showCockpit});
  }
  toggleShowPersons = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  changePersonNameHanlder = (id, event) => {
    const newPersons = [...this.state.persons];
    let index = newPersons.findIndex(person => {
      return person.id === id;
    });
    newPersons[index].name = event.target.value;
    this.setState({'persons': newPersons});
  }

  componentDidMount(){
    this.showCockpitBtnRef.current.click();
  }

  render(){
    let persons, cockpit = null;

    if(this.state.showCockpit){
      cockpit = (
        <Cockpit
          clicked={this.toggleShowPersons}
          showPersons={this.state.showPersons}/>
      );
    }
    if(this.state.showPersons){
      persons = (
        <Persons
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          changed={this.changePersonNameHanlder}/>
      );
    }
    return (
      <div>
        <button className="cockpit-btn" onClick={this.toggleShowCockpit} ref={this.showCockpitBtnRef}>
          {this.state.showCockpit? 'Hide Cockpit': 'Show Cockpit'}
        </button>
        <hr/>
        {cockpit}
        {persons}
      </div>
    );
  }
}
export default App;

/* Note:

How to use Ref ?

In Class Based Component

Method 1: (App.js) [Add in React version 16.3]

Step 1:
constructor(props){
  super(props);
  this.btnRef = React.createRef(null);
}

Step 2:
<button ref={this.btnRef}>Click It</button>

Step 3:
componentDidMount(){
  this.btnRef.current.click();
}


Method 2: (Persons.js) [Old way]

class Persons extends Component {
  btnRef = null;                        // Step 1
      OR
  btnRef = {current: null};

  componentDidMount(){                  // Step 3
    this.btnRef.focus();
  }

  render(){                             // Step 2
    <button ref={this.btnRef}>Click It</button>
  }
}


-------------------------------------------------------------------
For Functional Component

import React, { useEffect, useRef } from 'react';

const Cockpit = props => {
  const btnRef = useRef(null);                       // Step 1

  useEffect( () => {                                 // Step 3
    btnRef.current.focus();
  } );

  return <button ref={btnRef}>Click It</button>;     // Step 2
}

*/