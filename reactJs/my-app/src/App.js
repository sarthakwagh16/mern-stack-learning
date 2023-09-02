import React from 'react';
import {Greet} from './components/first_compo'
function Mybtn(){
  return(

    <button>I am a button !</button>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Welcome to my first react app !!</h1>
      <Mybtn />
      <Greet />
    </div>
  );
}

export default App;
