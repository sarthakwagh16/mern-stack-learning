import React from 'react';
import './App.css';
//import fun compo from another folder
import Header from './components/Header';

//importing class component
import Cheader from './components/Cheader';

//import specific component from another file
import {Greet} from './components/Header';

//topics= what is components, class and functional components with ex.

/*Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
*/


//functional compo= normal javascript functions
/*
function Fun_Component() {
  return (
    <div className="App">
      <h1>Hello ReactJs</h1>
      <p>This is a example of functional component</p>
    </div>
  );
}
export default Fun_Component;
*/



/*
What is class components?
Class components make use of ES6 class and extend the Component class in React. 
Sometimes called “smart” or “stateful” components as they tend to implement logic and state.
 React lifecycle methods can be used inside class components (for example, componentDidMount ).
*/


/*
class MyFun extends React.Component {

  render() {

    return <div className='clss-compo'>
      <h1>Hello ReactJs</h1>
      <p>
        This is my first example of class component
      </p>
      
    </div>;
  }

}

export default MyFun;

*/


// use the exported component from component folder
//it can be simply used as html tag

function App() {
  return (

    <div>
      <Header />
      <Cheader />
      <Greet />
    </div>
  );

}
export default App;
