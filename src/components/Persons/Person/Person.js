import React, { useEffect } from 'react';

const Person = (props) => {
    const style = {
        paragraph: {
            border: "1px solid gray",
            padding: "10px 20px",
            position: "relative",
            borderRadius: "10px",
            backgroundColor: "#fafafa"
        },
        button: {
            position: "absolute",
            right: "10px",
            top: "7px",
            marginBottom: "-50%",
            fontWeight: "bold",
            backgroundColor: "red",
            padding: "4px 8px",
            cursor: "pointer",
            color: "white",
            borderColor: "orange"
        },
        input: {
            marginTop: "12px"
        }
    };

    console.log("[___Person.js] function() => " + props.id);
    
    useEffect(() => {
        console.log("[Person.js] 1st useEffect() --- [nothing passed] => " + props.id);
        return () => {
            console.log("[Person.js] 1st useEffect() [CleanUp Work] --- [nothing passed] => " + props.id);
        }
    });

    useEffect(() => {
        console.log("[Person.js] 2st useEffect() --- [EMPTY array passed] - (\"Use of any \"props\" is NOT Allowed here\")");
        return () => {
            console.log("[Person.js] 2st useEffect() [CleanUp Work] --- [EMPTY array passed] - (\"Use of any \"props\" is NOT Allowed here\")");
        }
    }, []);

    useEffect(() => {
        console.log("[Person.js] 3rd useEffect() --- [FILLED \"name\" array passed] => " + props.id);
        return () => {
            console.log("[Person.js] 3rd useEffect() [CleanUp Work] --- [FILLED \"name\" array passed] => " + props.id);
        }
    }, [props.name, props.id]);

    useEffect(() => {
        console.log("[Person.js] 4th useEffect() --- [FILLED \"age\" array passed] # Age => " + props.age);
        return () => {
            console.log("[Person.js] 4th useEffect() [CleanUp Work] --- [FILLED \"age\" array passed] # Age => " + props.age);
        }
    }, [props.age]);

    return (
        <p style={style.paragraph}>
            I am <b>{props.name}</b>. Age: <b>{props.age}</b>
            <br/>
            <input style={style.input} type="text" value={props.name}
                onChange={e => {props.changed.call(null, props.id, e)}}/>
            <button
                style={style.button}
                onClick={e => props.deleted.call(this, props.id, e)}>X</button>
        </p>
    );

}
export default React.memo(Person);

/* Note
Error:
src\components\Persons\Person\Person.js
  Line 28:5:  React Hook "useEffect" is called in function "person" that is
  neither a React function component nor a custom React Hook function.
  React component names must start with an uppercase letter  react-hooks/rules-of-hooks
Search for the keywords to learn more about each error.


Remember:
Therefore first letter of functional component must be Upper Case.

----------------------------------------------------------------------------------------------

Warning:
webpackHotDevClient.js:138   src\components\Persons\Person\Person.js
Line 43:8:  React Hook useEffect has a missing dependency: 'props.id'.
Either include it or remove the dependency array  react-hooks/exhaustive-deps

To solve this:
Include missing dependency: 'props.id' in Array as 2nd argument of useeffect.
OR
Don't use 'props.id' in useEffect() hook's body.

Remember:
Use "only those props" which are included in 2nd Argument (which is array).
If empty array is passed, then Don't use any of the prop.

Reason: If you pass an empty array ([]), the props and state inside
        the effect will always have their initial values.

From: ReactJS.org
We recommend using the "exhaustive-deps" rule as part of our "eslint-plugin-react-hooks" package.
It warns when dependencies are specified incorrectly and suggests a fix.


--------------------------------------------------------------------------------

Case 1:
useEffect( () => {...} )
- Equivalent to [ componentDidMount(), shouldComponentUpdate() ]
- Execute for every time, After rendering

Case 2:
useEffect( () => {
    mainFun ...
    return () => {cleanUpFun ...} 
} )
- Equivalent to [ componentDidMount(), shouldComponentUpdate(), componentWillUnmount() ]
- For 1st call
    - only "mainFun" will be executed
- For Successive call
    - First "cleanUpFun" will execute.
    - After it "mainFun" will be executed
    Note: "cleanUpFun" is used for CleanUp work for previous "mainFun" call

Case 3: Pass empty array as 2nd Argument.
useEffect( () => {...}, [] )
- Equivalent to [ componentDidMount() ]
- Execute for Mounting only (say only one time).

Case 4: Pass empty array as 2nd Argument.
useEffect( () => {
    mainFun ...
    return () => {cleanUpFun ...} 
}, [] )
- Equivalent to [ componentDidMount(), componentWillUnmount() ]
- Execute "mainFun" for Mounting only (say only for First call).
- Execute "cleanUpFun" for UnMounting only (This is Also one time).


Case 5: Pass "filled" array as 2nd Argument.

useEffect( () => {...}, [props.arg1, props.arg1, props.argN] )
    AND
useEffect( () => {
    mainFun ...
    return () => {cleanUpFun ...} 
}, [arg1, arg2, argN] )

- Similar to (Case 1) and (Case 2), But this will execute Only
    if any of the "props.arg" is CHANGED.

*/