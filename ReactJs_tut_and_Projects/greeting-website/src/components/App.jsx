import React from "react";


let greet = '';

let currDate = new Date();
let timeInHour = currDate.getHours();
console.log(timeInHour);

let cssStyle={
  color:'red'
}



function App(){
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
      return (
        <div>

            <h1>Hello Sarthak, <span style={cssStyle}>{greet}</span></h1>;
        </div>
      )

}
export default App;