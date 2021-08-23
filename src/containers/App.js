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
  
  constructor(props){
    super(props);
    console.log("[App.js] constructor()");
  }
  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFromProps()");
    return state;
  }
  componentDidMount(){
    console.log("[App.js] componentDidMount()");
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate()");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[App.js] getSnapshotBeforeUpdate()");
    return {message: "Snapshot!"};
  }
  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate()");
  }
  componentWillUnmount(){
    console.log("[App.js] componentWillUnmount()");
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
    console.log("[App.js] render()");
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

/* Note:

Component Mounting
- constructor(props)
- static getDerivedStateFromProps(props, state)
- render()
- componentDidMount()


Component Updating
- static getDerivedStateFromProps(props, state)
- shouldComponentUpdate(nextProps, nextState)
- render()
- getSnapshotBeforeUpdate(prevProps, prevState)
- componentDidUpdate()

Component Unmounting
- componentWillUnmount()




Console.log()

// When page loads...
[App.js] constructor()                          App.js:20
[App.js] getDerivedStateFromProps()             App.js:23
[App.js] render()                               App.js:57
[Persons.js] constructor()                      Persons.js:16
[Persons.js] getDerivedStateFromProps()         Persons.js:19
[Persons.js] render()                           Persons.js:41
(5) [Person.js] function()                      Person.js:26
[Persons.js] componentDidMount()                Persons.js:23
[App.js] componentDidMount()                    App.js:27

// Click on "Hide List"
[App.js] getDerivedStateFromProps()             App.js:23
[App.js] shouldComponentUpdate()                App.js:30
[App.js] render()                               App.js:57
[Persons.js] getDerivedStateFromProps()         Persons.js:19
[Persons.js] shouldComponentUpdate()            Persons.js:26
[Persons.js] render()                           Persons.js:41
[Persons.js] getSnapshotBeforeUpdate()          Persons.js:30
[App.js] getSnapshotBeforeUpdate()              App.js:34
[Persons.js] componentDidUpdate()               Persons.js:34
[App.js] componentDidUpdate()                   App.js:38

// Click on "Show List"
[App.js] getDerivedStateFromProps()             App.js:23
[App.js] shouldComponentUpdate()                App.js:30
[App.js] render()                               App.js:57
[Persons.js] getDerivedStateFromProps()         Persons.js:19
[Persons.js] shouldComponentUpdate()            Persons.js:26
[Persons.js] render()                           Persons.js:41
(5) [Person.js] function()                      Person.js:26
[Persons.js] getSnapshotBeforeUpdate()          Persons.js:30
[App.js] getSnapshotBeforeUpdate()              App.js:34
[Persons.js] componentDidUpdate()               Persons.js:34
[App.js] componentDidUpdate()                   App.js:38

// Delete one Person
[App.js] getDerivedStateFromProps()             App.js:23
[App.js] shouldComponentUpdate()                App.js:30
[App.js] render()                               App.js:57
[Persons.js] getDerivedStateFromProps()         Persons.js:19
[Persons.js] shouldComponentUpdate()            Persons.js:26
[Persons.js] render()                           Persons.js:41
(4) [Person.js] function()                      Person.js:26
[Persons.js] getSnapshotBeforeUpdate()          Persons.js:30
[App.js] getSnapshotBeforeUpdate()              App.js:34
[Persons.js] componentDidUpdate()               Persons.js:34
[App.js] componentDidUpdate()                   App.js:38

*/