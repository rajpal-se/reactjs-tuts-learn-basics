import React from 'react';

class App extends React.Component{
    
    render(){
        return ( 
            <>
                <h1>Conditional Rendering</h1>
                {/* 
                You can assign JSX to variables and change their value later based on condition.
                Example:
                let com = <LoggedIn>;
                if(userIsLoggedOut) com = <LoggedOut>;

                return com;
                */}

                {/* To implement inline IF statement,
                    use Logical && operator */}
                <div>
                    <p>{true}</p>               {/* <p></p> */} {/* It is null */}
                    <p>{false}</p>              {/* <p></p> */} {/* It is null */}
                    <p>{0}</p>                  {/* <p>0</p> */}
                    <p>{1}</p>                  {/* <p>1</p> */}
                    <p>{3 > 1 && "hi"}</p>      {/* <p>hi</p> */}
                    <p>{5 < 3 && "hi"}</p>      {/* <p></p> */} {/* It is null */}
                    <p>{1 && "hi"}</p>          {/* <p>hi</p> */}
                    <p>{0 && "hi"}</p>          {/* <p>0</p> */} {/* It is null */}
                    <p>{1 && 1}</p>             {/* <p>1</p> */}
                    <p>{1 && 0}</p>             {/* <p>0</p> */}
                    <p>{1 && 5}</p>             {/* <p>5</p> */}
                    <p>{"a" && "b" && 2>1}</p>  {/* <p></p> */} {/* It is null */}
                    <p>{"a" && "b" && "c"}</p>  {/* <p>c</p> */}
                </div>

                {/* To implement inline IF-ELSE statement,
                    use "Ternary" operator */}
                <div>
                    <p>{ true ? "Logged in" : "Logged out"}</p>     {/* <p>Logged in</p> */}
                    <p>{ false ? "Logged in" : "Logged out"}</p>    {/* <p>Logged out</p> */}
                </div>

                {/* To prevent Component from rendering, return "null"
                
                render(){
                    if(true){
                        return null;
                    }
                    return (
                        <div>...</div>
                    );
                }
                
                
                */}
            </>
        );
    }
}

export default App;