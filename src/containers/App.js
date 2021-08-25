import React, { PureComponent } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';


class App extends PureComponent{
  state = {
    persons: [
      {id: "id_1", name: "Max", age: 24},
      {id: "id_2", name: "John", age: 19},
      {id: "id_3", name: "Andrew", age: 30},
      // {id: "id_4", name: "Jackson", age: 26},
      // {id: "id_5", name: "James", age: 20}
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
    // console.log(index);
  }
  personNameChangeHandler = (id, event) => {
    const newPersons = [...this.state.persons];
    let index = newPersons.findIndex(person => {
      return person.id === id;
    });
    newPersons[index].name = event.target.value;
    this.setState({'persons': newPersons});
  }
  render(){
    console.log("[App.js] render()");
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <Persons
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          personDeleteHandler={this.personDeleteHandler}
          personNameChangeHandler={this.personNameChangeHandler}/>
      );
    }
    return (
      <div>
        <Cockpit
          clicked={this.showListClickHandler}
          showPersons={this.state.showPersons}
          />
        {persons}
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
App.js:20       [App.js] constructor()
App.js:23       [App.js] getDerivedStateFromProps()
App.js:62       [App.js] render()
Persons.js:16   [Persons.js] constructor()
Persons.js:19   [Persons.js] getDerivedStateFromProps()
Persons.js:41   [Persons.js] render()
Person.js:29    [___Person.js] function() => id_1
Person.js:29    [___Person.js] function() => id_2
Person.js:29    [___Person.js] function() => id_3
Persons.js:23   [Persons.js] componentDidMount()
App.js:27       [App.js] componentDidMount()
Person.js:32    [Person.js] 1st useEffect() --- [nothing passed] => id_1
Person.js:39    [Person.js] 2st useEffect() --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:46    [Person.js] 3rd useEffect() --- [FILLED "name" array passed] => id_1
Person.js:53    [Person.js] 4th useEffect() --- [FILLED "age" array passed] # Age => 24
Person.js:32    [Person.js] 1st useEffect() --- [nothing passed] => id_2
Person.js:39    [Person.js] 2st useEffect() --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:46    [Person.js] 3rd useEffect() --- [FILLED "name" array passed] => id_2
Person.js:53    [Person.js] 4th useEffect() --- [FILLED "age" array passed] # Age => 19
Person.js:32    [Person.js] 1st useEffect() --- [nothing passed] => id_3
Person.js:39    [Person.js] 2st useEffect() --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:46    [Person.js] 3rd useEffect() --- [FILLED "name" array passed] => id_3
Person.js:53    [Person.js] 4th useEffect() --- [FILLED "age" array passed] # Age => 30

// Click on "Hide List"
App.js:23       [App.js] getDerivedStateFromProps()
App.js:62       [App.js] render()
App.js:30       [App.js] getSnapshotBeforeUpdate()
Persons.js:37   [Persons.js] componentWillUnmount()
App.js:34       [App.js] componentDidUpdate()
Person.js:34    [Person.js] 1st useEffect() [CleanUp Work] --- [nothing passed] => id_1
Person.js:41    [Person.js] 2st useEffect() [CleanUp Work] --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:48    [Person.js] 3rd useEffect() [CleanUp Work] --- [FILLED "name" array passed] => id_1
Person.js:55    [Person.js] 4th useEffect() [CleanUp Work] --- [FILLED "age" array passed] # Age => 24
Person.js:34    [Person.js] 1st useEffect() [CleanUp Work] --- [nothing passed] => id_2
Person.js:41    [Person.js] 2st useEffect() [CleanUp Work] --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:48    [Person.js] 3rd useEffect() [CleanUp Work] --- [FILLED "name" array passed] => id_2
Person.js:55    [Person.js] 4th useEffect() [CleanUp Work] --- [FILLED "age" array passed] # Age => 19
Person.js:34    [Person.js] 1st useEffect() [CleanUp Work] --- [nothing passed] => id_3
Person.js:41    [Person.js] 2st useEffect() [CleanUp Work] --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:48    [Person.js] 3rd useEffect() [CleanUp Work] --- [FILLED "name" array passed] => id_3
Person.js:55    [Person.js] 4th useEffect() [CleanUp Work] --- [FILLED "age" array passed] # Age => 30

// Click on "Show List"
App.js:23       [App.js] getDerivedStateFromProps()
App.js:62       [App.js] render()
Persons.js:16   [Persons.js] constructor()
Persons.js:19   [Persons.js] getDerivedStateFromProps()
Persons.js:41   [Persons.js] render()
Person.js:29    [___Person.js] function() => id_1
Person.js:29    [___Person.js] function() => id_2
Person.js:29    [___Person.js] function() => id_3
App.js:30       [App.js] getSnapshotBeforeUpdate()
Persons.js:23   [Persons.js] componentDidMount()
App.js:34       [App.js] componentDidUpdate()
Person.js:32    [Person.js] 1st useEffect() --- [nothing passed] => id_1
Person.js:39    [Person.js] 2st useEffect() --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:46    [Person.js] 3rd useEffect() --- [FILLED "name" array passed] => id_1
Person.js:53    [Person.js] 4th useEffect() --- [FILLED "age" array passed] # Age => 24
Person.js:32    [Person.js] 1st useEffect() --- [nothing passed] => id_2
Person.js:39    [Person.js] 2st useEffect() --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:46    [Person.js] 3rd useEffect() --- [FILLED "name" array passed] => id_2
Person.js:53    [Person.js] 4th useEffect() --- [FILLED "age" array passed] # Age => 19
Person.js:32    [Person.js] 1st useEffect() --- [nothing passed] => id_3
Person.js:39    [Person.js] 2st useEffect() --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:46    [Person.js] 3rd useEffect() --- [FILLED "name" array passed] => id_3
Person.js:53    [Person.js] 4th useEffect() --- [FILLED "age" array passed] # Age => 30


// Delete one Person
App.js:23       [App.js] getDerivedStateFromProps()
App.js:62       [App.js] render()
Persons.js:19   [Persons.js] getDerivedStateFromProps()
Persons.js:26   [Persons.js] shouldComponentUpdate()
Persons.js:41   [Persons.js] render()
Persons.js:30   [Persons.js] getSnapshotBeforeUpdate()
App.js:30       [App.js] getSnapshotBeforeUpdate()
Persons.js:34   [Persons.js] componentDidUpdate()
App.js:34       [App.js] componentDidUpdate()
Person.js:34    [Person.js] 1st useEffect() [CleanUp Work] --- [nothing passed] => id_1
Person.js:41    [Person.js] 2st useEffect() [CleanUp Work] --- [EMPTY array passed] - ("Use of any "props" is NOT Allowed here")
Person.js:48    [Person.js] 3rd useEffect() [CleanUp Work] --- [FILLED "name" array passed] => id_1
Person.js:55    [Person.js] 4th useEffect() [CleanUp Work] --- [FILLED "age" array passed] # Age => 24


// Edit Person Name
App.js:23       [App.js] getDerivedStateFromProps()
App.js:62       [App.js] render()
Persons.js:19   [Persons.js] getDerivedStateFromProps()
Persons.js:26   [Persons.js] shouldComponentUpdate()
Persons.js:41   [Persons.js] render()
Person.js:29    [___Person.js] function() => id_2
Persons.js:30   [Persons.js] getSnapshotBeforeUpdate()
App.js:30       [App.js] getSnapshotBeforeUpdate()
Persons.js:34   [Persons.js] componentDidUpdate()
App.js:34       [App.js] componentDidUpdate()
Person.js:34    [Person.js] 1st useEffect() [CleanUp Work] --- [nothing passed] => id_2
Person.js:48    [Person.js] 3rd useEffect() [CleanUp Work] --- [FILLED "name" array passed] => id_2
Person.js:32    [Person.js] 1st useEffect() --- [nothing passed] => id_2
Person.js:46    [Person.js] 3rd useEffect() --- [FILLED "name" array passed] => id_2
​

*/