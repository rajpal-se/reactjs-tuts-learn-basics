import React from 'react';
import WithClass from './hoc/WithClass';

const List4 = props => {
    return (
        <WithClass classes="bg-silver">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </WithClass>
    );
}

export default List4;