import React, { Component } from 'react';

class App extends Component{

  state = {counter: 0}

  updateCounter = () => {
    /*
    this.setState({
      counter: this.state.counter + 1
    });
    */


    /* Note:
    * Use this Approach, whenever there is use of "Previous" State
    * In above Case sometimes "this.state" refers to "old" State, Instead of "Previous" State.
    */
    this.setState( (prevState, props) => {
      // Don't Mutate the "State".
      return {
        counter: prevState.counter + 1
      }
    } );
    
  }

  render(){
    return (
      <div style={{margin: '20px auto', width: '100px'}}>
        <div>Counter: <b>{this.state.counter}</b></div><br/>
        <button onClick={this.updateCounter}>Increment</button>
      </div>
    );
  }
}

export default App;