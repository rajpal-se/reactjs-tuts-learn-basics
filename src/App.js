import React, { Component } from 'react';
import List1 from './List1';
import List2 from './List2';
import List3 from './List3';
import List4 from './List4';
import List5 from './List5';

class App extends Component{
  render(){
    return (
      <div>
        <ul> <List1/> </ul> <hr/>
        <ul> <List2/> </ul> <hr/>
        <ul> <List3/> </ul> <hr/>
        <List4/> <hr/>
        <List5/> <hr/>
      </div>
    );
  }
}

export default App;

/* 
Method 1:
Return array of JSX elements and assign "key" to each element, as it is a List.

Ex:

return [
    <li key="1">Item 1</li>,
    <li key="2">Item 2</li>,
    <li key="3">Item 3</li>
];

------------------------------------------------------

Method 2: (For React version 16.2 and above)
Wrap list items in "<React.Fragment> ... </React.Fragment>"
Ex:
return (
  <React.Fragment>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </React.Fragment>
);

Note: ShortHand Notation Wrap list items in "<> ... </>"

Ex:

return (
  <>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </>
);

------------------------------------------------------

Method 3: (Simple Wrapper)
Using Auxiliary Component (HOC component)

Note: In Windows OS, "AUX" is reserved name.

Ex:

[Auxiliary.js]
const Auxiliary = props => props.children;
export default Auxiliary;

[List3.js]
return (
  <Auxiliary>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </Auxiliary>
);

------------------------------------------------------

Method 4: HOC (Wrapper and modify HTML Structure)
Using withClass component (HOC component)

Ex:

[WithClass.js]
const WithClass = props => {
    return <ul className={props.classes}> {props.children} </ul>;
}
export default WithClass;

[List4.js]
return (
  <WithClass classes="bg-silver">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </WithClass>
);

------------------------------------------------------

Method 5: HOC (Wrapper and modify) Use when Strong JS Logics are used.
HOC component (This type of HOC is used in npm packages)

Note: "withClassHOC" first character is LowerCase.
    Beacause it is a simple JS function

Note: Don't Forget to pass "{...props}"

Ex:

[withClassHOC.js]
const withClassHOC = (WrapComponent, classes) => {
    return props => {
        return <ul className={classes}> <WrapComponent {...props} /> </ul>;
    }
}
export default withClassHOC;

[List5.js]
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

*/