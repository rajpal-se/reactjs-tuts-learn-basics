import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component {
    style = {
        list: {
            margin: "auto",
            maxWidth: "300px"
        }
    }

    render(){
        return (
            <div style={this.style.list}>
                {
                    this.props.persons.map(person => (
                        <Person
                            key={person.id}
                            id={person.id}
                            name={person.name}
                            age={person.age}/>
                    ) )
                }
            </div>
        );
    }
}

export default Persons;