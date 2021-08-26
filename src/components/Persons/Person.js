import React from 'react';

import AuthContext from '../../context/authContext';

const Person = props => {
    return (
        <p className="paragraph" key={props.id}>
            I am <b>{props.name}</b>. Age: <b>{props.age}</b>
            <br/>
            <AuthContext.Consumer>
                {context => (
                    <input type="text" value={props.name}
                        onChange={e => {context.nameChangeHandler.call(null, props.id, e)}}/>
                )}
            </AuthContext.Consumer>
        </p>
    )
}

export default Person;