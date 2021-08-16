import './App.css';
import React from 'react';
import Person from './Person/Person';

function App() {  
  return (
    <div className="App">
      <h1>Person Details</h1>
      <Person name="Max" age="20"/>
      <Person name="John" age="29">He is a Good person</Person>
      <Person name="Cia" age="19"/>
    </div>
  );
}
export default App;