import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let greet = '';

let currDate = new Date();
let timeInHour = currDate.getHours();
console.log(timeInHour);

let cssStyle={
  color:'red'
}


if(timeInHour>=1 && timeInHour<12){

  greet='Good Morning';
  cssStyle.color='green';
  
}
else if(timeInHour>=12 && timeInHour<16){
  greet='Good afternoon';
  cssStyle.color='yellow';
}
else if(timeInHour>=16 && timeInHour<20){
  greet='Good Afternoon';
  cssStyle.color='black';
}
else{
  greet='Good Night';
  cssStyle.color='purple';
}
ReactDOM.render(
  <>
  <div>

  <h1>Hello Sarthak, <span style={cssStyle}>{greet}</span></h1>
  </div>
  </>,
  document.getElementById('root')
)