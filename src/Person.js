import React from 'react';

const Person = props => {

    const style = {
        border: '1px solid gray',
        margin: '5px',
        padding: '10px 20px'
    }

    return props.persons.map(person => (
        <div style={style} key={person.id}>
            I am <b>{person.name}</b><br/>
            <input type="text" value={person.name}/>
        </div>
    ));
}

export default Person;