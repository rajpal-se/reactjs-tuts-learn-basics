import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    style = {
        list: {
            margin: "auto",
            maxWidth: "300px"
        }
    }
    state = {}


    constructor(props){
        super(props);
        console.log("[Persons.js] constructor()");
    }
    static getDerivedStateFromProps(props, state){
        console.log("[Persons.js] getDerivedStateFromProps()");
        return state;
    }
    componentDidMount(){
        console.log("[Persons.js] componentDidMount()");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("[Persons.js] shouldComponentUpdate()");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate()");
        return {message: "Snapshot!"};
    }
    componentDidUpdate(){
        console.log("[Persons.js] componentDidUpdate()");
    }
    componentWillUnmount(){
        console.log("[Persons.js] componentWillUnmount()");
    }
    
    render(){
        console.log("[Persons.js] render()");
        

        return (
            <div style={this.style.list}>
                {
                    this.props.persons.map(person => (
                        <Person
                            id={person.id}
                            name={person.name}
                            age={person.age}
                            deleted={this.props.personDeleteHandler}
                            key={person.id}
                            changed={this.props.personNameChangeHandler}
                            />
                        )
                    )
                }
            </div>
        );
    }
}

export default Persons;