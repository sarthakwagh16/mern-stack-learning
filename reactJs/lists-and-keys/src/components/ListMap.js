import React, { Component } from 'react'

/*
list means arrays which is used to stored identical elements
map() function is generally used to loop over the lists
map uses callback fun
**Imp**
A callback is a function that is passed as an argument to another function, 
and is called after the main function has finished its execution.

lists are written below the render fun in class components

*/

export class ListMap extends Component {

    

  render() {

    /*example 1
    const names=["sarthak", "wagh", "ashwini", "girija"]
    const newNames=names.map(function(names){
      return <li>{names}</li>
    })
    */

    /*
    example 2
    const nums=[1,2,3,4,5]
    //here call back fun is present inside map
    const newNums=nums.map(function(nums){
      return <h1>{nums*2}</h1>
      
    })
    */

    //how to optimize the code or shorten the code
    const nums=[1,2,3,4,5]
    //here call back fun is present inside map
    const newNums=nums.map((nums)=><h1>{nums*2}</h1>);
     


    return (
      <div>
        <h1>list items after multiplied by 2 are</h1>
        {/* <ul>{newNames}</ul> */}
        <ul>{newNums}</ul>
       
      </div>
    )
  }
}

export default ListMap