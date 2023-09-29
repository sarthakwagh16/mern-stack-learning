import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import './index.css';
import Data from "./Data";


const OriData=Data.map(function mydata(val){
  return(
    <Cards
  
  title={val.title}
  info={val.category}
  imgsrc={val.imgsrc}

  />
  )
})
ReactDOM.render(
  <>
    <h1 className="header">Top 5 Netflix series</h1>
  
    {OriData}

  

</>
  ,


  document.getElementById('root')

)