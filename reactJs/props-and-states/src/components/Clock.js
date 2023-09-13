import React from 'react'

function Clock() {
   const date=new Date();
   const curr=date.toLocaleTimeString();
  return (
    <div>
        <h1>It's {curr}</h1>
    </div>
  )
}
setInterval(Clock, 1000);

export default Clock