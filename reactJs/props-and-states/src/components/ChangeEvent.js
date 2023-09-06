import React from 'react'

/*
React event handlers are written inside curly braces:

onClick={shoot}  instead of onClick="shoot()"

do not add () in the event bcz it will automatically call the fun
without clicking the button
*/
function ChangeEvent() {

    function changed(){
        console.log("Hello change event :)");
    }
  return (
    <div>
        <button onClick={changed}>Click me</button>
    </div>
  )
}

export default ChangeEvent