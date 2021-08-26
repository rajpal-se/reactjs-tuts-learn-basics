import React from 'react';

import PropTypes from 'prop-types';

const Person = props => {
    return (
        <div style={{textAlign: 'center'}}>
            <p>I am {props.name}.</p>
            <p>I am {props.age} years old.</p>
        </div>
    );
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    updated: PropTypes.func
}

export default Person;