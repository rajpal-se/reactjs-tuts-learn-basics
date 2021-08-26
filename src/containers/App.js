import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

import AuthContext from '../context/authContext';


class App extends Component{

  state = {
    persons: [
      {id: "id_1", name: "Max"},
      {id: "id_2", name: "John"},
      {id: "id_3", name: "Andrew"},
      // {id: "id_4", name: "Jackson"},
      // {id: "id_5", name: "James"}
    ],
    showCockpit: true,
    showPersons: true
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
        <button className="cockpit-btn" onClick={this.toggleShowCockpit}>
          {this.state.showCockpit? 'Hide Cockpit': 'Show Cockpit'}
        </button>
        <hr/>
        <AuthContext.Provider value={{
            persons: this.state.persons,
            toggleShowPersons: this.toggleShowPersons,
            nameChangeHandler: this.changePersonNameHanlder
          }}>
          {cockpit}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}
export default App;


/* Note:
Context API is introduced in [v16.3]

Step 1:
[context/authContext.js]

import React from 'react';
const authContext = React.createContext(null);
export default authContext;


Step 2: First Import
import AuthContext from '../context/authContext';

<AuthContext.Provider value={ DefaultValues... }>
  ...
</AuthContext.Provider>


Step 3: First Import
import AuthContext from '../context/authContext';

<AuthContext.Consumer>
  { context => (
    <div> {context.name} </div>
  ) }
</AuthContext.Consumer>

--------------------------------------------------------------------------------

Note:  Another method of using Context API

This method is introduced in [React v16.6]

You have to use <AuthContext.Provider> as usual.
But "Consumer" section their new approach

######################################
Ex: For "Class Based" Component
Note: Now You can use "this.context.<prop-name>" property in Entire class anywhere.


import AuthContext from '../context/authContext';
class Persons extends Component{
  static contextType = AuthContext;

  componentDidMount(){
    this.context.myProperty ...
  }

  render(
    return(
      this.context.myProperty ...
    )
  )
}

######################################
Ex: For "Functional" Component

import React, { useContext } from 'react';
import AuthContext from '../context/authContext';

const Persons = props => {

  const authContext = useContext(AuthContext);

  // Now you can use "authContext" anywhere inside this function

  return (
    JSX...
  );
}

*/