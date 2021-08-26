import React from 'react';
import withClassHOC from './hoc/withClassHOC';

const List5 = props => {
    return (
        <>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </>
    );
}

export default withClassHOC( List5, "bg-cyan" );