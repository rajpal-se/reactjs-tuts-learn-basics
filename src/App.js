import React, { Component } from 'react';
import Person from './Person';

class App extends Component{

  updateHandler = () => {

  }

  render(){
    return (
      <Person age={20} name="name" updated={this.updateHandler}></Person>
    );
  }
}

export default App;

/* Note:
PropTypes can be used for "Class-Based" and "Functional" Component

"prop-types": It is a package from React Community.
But it is not included in React Core.

By default, It is installed when we create React project.
But Still, To install it manually.

npm install prop-types --save

*/