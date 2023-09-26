import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import kota from './imgs/kotafactory.jpg';
import dark from './imgs/dark.jpg';
import './index.css';

ReactDOM.render(
  <>
  <Cards
  imgsrc={dark}
  category="A missing child sets four families on a f
  rantic hunt for answers as they unearth a mind-bending mystery that spans three generations."
  title='Dark'
  link='https://www.netflix.com/in/title/80100172'/>

  <Cards
  imgsrc={kota}
  category="In a city of coaching centers known to train Indias f
  inest collegiate minds, an earnest but unexceptional student and his friends navigate campus life"
  title='Kota Factory'
  link='https://www.netflix.com/in/title/81249783'/>

<Cards
  imgsrc={kota}
  category="In a city of coaching centers known to train Indias f
  inest collegiate minds, an earnest but unexceptional student and his friends navigate campus life"
  title='Kota Factory'
  link='https://www.netflix.com/in/title/81249783'/>

</>
  ,


  document.getElementById('root')

)