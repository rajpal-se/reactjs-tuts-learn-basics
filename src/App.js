import React, { Component } from 'react';
import Person from './Person/Person';

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
  style = {
    heading: {
      textAlign: "center",
      border: "1px solid gray",
      maxWidth: "400px",
      margin: "20px auto",
      padding: "20px"
    
    
    },
    paragraph: {
      textAlign: "center"
    },
    button: {
      cursor: "pointer",
      padding: "10px 20px"
    },
    list: {
      margin: "auto",
      maxWidth: "300px"
    }
  };

  buttonClickHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  deleteHandler = (id) => {
    const index = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const newPersons = [...this.state.persons];
    // const newPersons = this.state.persons.slice();
    newPersons.splice(index, 1);
    this.setState({persons: newPersons});
  }
  render(){
    return (
      <div>
        <h1 style={this.style.heading}>List of All Persons</h1>
        <p style={this.style.paragraph}>
          <button style={this.style.button} onClick={this.buttonClickHandler}>{this.state.showPersons? 'Hide List' : 'Show List'}</button>
        </p>
        <hr/>
        {this.state.showPersons?
          <div style={this.style.list}>
            {
              this.state.persons.map(p => (
                <Person name={p.name} deleteHandler={this.deleteHandler} id={p.id} key={p.id}/>
              ))
            }
          </div>
          :null
        }
        
      </div>
    );
  }
}
export default App;

/* Note:
1. In JSX we only use Ternary Operator (One line statement).
    Return "JSX" or "null"
    In JSX, multiline JavaScript is NOT Allowed.

2. Use "map" function on Array and return "JSX" for each array element

3. Don't Mutate the state Data.
    i.   first make a copy of current state.
    ii.  perform operations on copied state.
    iii. update the state with copied state.

4. "key" attribute is reserved for JSX List items.
5. For "key" attribute, use IDs instead of "index".
    Because order of array items get changed.
    This can negatively impact performance and may cause issues with component state.

*/