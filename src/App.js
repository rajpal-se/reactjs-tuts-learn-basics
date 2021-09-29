import React from 'react';

class App extends React.Component{

    // Using ES6 syntax
    clickHandler = (arg1, arg2) => {
        console.log(this);  // (App Object) - React component Object
        console.log(arg1);  // Click Event Object (SyntheticBaseEvent)
        console.log(arg2);  // undefined
    }
    
    render(){
        return (
            <button onClick={this.clickHandler}>Click me</button>
        )
    }
    

    /* Simple function definition
    clickHandler(arg1, arg2){
        console.log(this);  // undefined
        console.log(arg1);  // Click Event Object (SyntheticBaseEvent)
        console.log(arg2);  // undefined
    }
    render(){
        return (
            <button onClick={this.clickHandler}>Click me</button>
        )
    }
    */

    /*
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(arg1, arg2){
        console.log(this);  // (App Object) - React component Object
        console.log(arg1);  // Click Event Object (SyntheticBaseEvent)
        console.log(arg2);  // undefined
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

    /*
     * Other way to Access "Click Event Object". 
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
    /*
    clickHandler = (event) => {
        console.log(event);  // Click Event Object (SyntheticBaseEvent)
    }

    render(){
        return (
            <button onClick={(e) => this.clickHandler(e) }>Click me</button>
        )
    }
    */


}

export default App;