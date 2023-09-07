import React, { Fragment } from 'react'

/*
A common pattern in React is for a component to return multiple elements. 
Fragments let you group a list of children without adding extra nodes to the DOM.
*/
function Fragments() {
  return (
    // first way to define fragment
    // <React.Fragment>
    //     <h1>Hello fragments</h1>
    //     <button>Click fragment</button>
    // </React.Fragment>


    // second way to define fragment
    <Fragment>
        <h1>hello srushti</h1>
    </Fragment>

    //third way to define fragment
    // <>
    //     <h1>hello komal</h1>
    // </>

  )
}

export default Fragments