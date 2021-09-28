import React from 'react';

class App extends React.Component{
    
    /* Simple function definition
    clickHandler(){
        console.log(this);  // undefined
    }

    render(){
        return (
            <button onClick={this.clickHandler}>Click me</button>
        )
    }
    */
    
    /* Bind "this"
    clickHandler(){
        console.log(this);  // (App Object) - React component Object
    }

    render(){
        return (
            <button onClick={this.clickHandler.bind(this)}>Click me</button>
        )
    }
    */

    /* Using ES6 syntax
    clickHandler = () => {
        console.log(this);  // (App Object) - React component Object
    }
    
    render(){
        return (
            <button onClick={this.clickHandler}>Click me</button>
        )
    }
    */


    /*
     * How to Access "Click Event Object". 
     * */

    // Method 1: 
    /* Using Anonymous function
    clickHandler(){
        console.log(this);  // Click Event Object (SyntheticBaseEvent)
    }

    render(){
        return (
            <button onClick={(e) => this.clickHandler.call(e) }>Click me</button>
            // OR
            <button onClick={(e) => { this.clickHandler.call(e) } }>Click me</button>
        )
    }
    */


    // Method 2:
    clickHandler = (event) => {
        console.log(event);  // Click Event Object (SyntheticBaseEvent)
    }

    render(){
        return (
            <button onClick={(e) => this.clickHandler(e) }>Click me</button>
        )
    }
}

export default App;