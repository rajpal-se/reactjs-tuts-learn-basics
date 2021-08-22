import React from 'react';
import Person from './Person/Person';

const Persons = props => {
    const style = {
        list: {
            margin: "auto",
            maxWidth: "300px"
        }
    }
    
    return (
        props.showPersons?
        <div style={style.list}>
            {
                props.persons.map(person => (
                    <Person
                        id={person.id}
                        name={person.name}
                        deleted={props.personDeleteHandler}
                        key={person.id}
                        />
                    )
                )
            }
        </div>
        :null
    )
}

export default Persons;