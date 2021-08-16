import './App.css';
import React from 'react';

function App() {  
  return (
    // Using JSX
    <div className="App">
      <h1>This is Heading 1</h1>
      <h2>And It is Heading 2</h2>
    </div>
   
    /*
    # Using JS
    React.createElement('div', {'className': 'App'},
      React.createElement('h1', null, 'This is Heading 1'),
      React.createElement('h2', null, 'And It is Heading 2')
    )
     */

    /*
    # It also works (return without brackets)
    return <article>
      <h1>Heading</h1>
      <p>Body</p>
    </article>
    */

    /*
    # It Doesn't works (return starts from next line)
    return
    <article>
      <h1>Heading</h1>
      <p>Body</p>
    </article>
    */  
  );
}
export default App;

/* 
Note:
1. Always return Single Element (Root Element)

2. Here we returns JSX code which looks similar to HTML tags
   But it is not HTML, It is JS only. These are defined in JSX.
   i.e. "class" attribute is written as "className".

3. When we JSX, we always need to import "React" package.
   Because JSX code is converted in JS using "React.createElement()" method.

4. const element = <h1>Hello, world!</h1>;
   const element = <h1>Hello, {data.username}</h1>;
    This funny tag syntax is neither a string nor HTML.
    It is called JSX, and it is a syntax extension to JavaScript.
    "data.username", Here "data" is object which contains "username" propery.
*/