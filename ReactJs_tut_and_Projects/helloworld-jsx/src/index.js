import React from 'react';
import ReactDOM from 'react-dom';
//include external css file
import './index.css';

//syntax: render("kya likhna hai", "kha pr likhna hai")
//ReactDOM.render(<h1>Hello World !</h1>, document.getElementById("root"));

//how to render multiple jsx elements 
/*
ReactDOM.render(

  <div>
    <h1>how to render multiple jsx elements</h1>
    <button>render me !</button>
  </div>,
  document.getElementById('root')
)

*/

/*challenge 01: create simple web app

ReactDOM.render(
  <div>
    <h1>My netflix app </h1>
    <p>Top 5 web series on netflix</p>
    <ul>
      <li>stranger things</li>
      <li>kota factory</li>
      <li>wednesday</li>
      <li>sex education</li>
      <li>friends</li>
    </ul>
  </div>,

  document.getElementById('root')
)

*/

//jsx expressions
/*
const name="sarthak";
ReactDOM.render(
  //first method
  // <h1>My name is {name}</h1>

  //second method using back ticks
  <h1>{`My name is ${name}`}</h1>
  ,
  document.getElementById('root')
)

*/

//ReactJs challenge 02: display current date and time
const name="Sarthak";
const date=new Date();
const currDate=date.toLocaleDateString();
const currTime=date.toLocaleTimeString();

ReactDOM.render(
  <>
  <div className='headDiv'>

  <h1>My name is {name}</h1>
  <p>Current date is {currDate}</p>
  <p>Current time is {currTime}</p>
  </div>
  </>,
  

  document.getElementById('root')
)