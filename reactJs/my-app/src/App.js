import React from 'react';
import './App.css';
//import {Greet} from './components/first_compo';

//topics= folder structure, basic info about react, how to create component
// how to write jsx , 

const name=()=>{
  alert('hello react');
}

const greet=<h2>Good morning folks !</h2>


const age=(a)=>{
  if(a>18){
    return <h2>you are eligible for voting</h2>
  }
  else{
    return <h2>you are not eligible for voting</h2>
  }
}

const intro="Sarthak";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my first react app !</h1>
      {greet}
      <button onClick={name}>Btn</button>
      {age(19)}
      <h1>Hello {intro}</h1>
    </div>
  );
}

export default App;
