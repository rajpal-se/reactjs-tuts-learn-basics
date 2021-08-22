import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';


class App extends Component{
  state = {
    persons: [
      {id: "id_1", name: "Max", age: 24},
      {id: "id_2", name: "John", age: 19},
      {id: "id_3", name: "Andrew", age: 30},
      {id: "id_4", name: "Jackson", age: 26},
      {id: "id_5", name: "James", age: 20}
    ],
    showPersons: true,
  }
  

  showListClickHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  personDeleteHandler = (id) => {
    const index = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const newPersons = [...this.state.persons];
    newPersons.splice(index, 1);
    this.setState({persons: newPersons});
  }
  render(){
    return (
      <div>
        <Cockpit
          clicked={this.showListClickHandler}
          showPersons={this.state.showPersons}
          />
        <Persons
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          personDeleteHandler={this.personDeleteHandler}
          />
      </div>
    );
  }
}
export default App;