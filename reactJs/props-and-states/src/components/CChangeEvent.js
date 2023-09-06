import React, { Component } from 'react'

export class CChangeEvent extends Component {

    changed(){
        console.log("Hello from class change event")
    }
  render() {
    return (
      <div>
        <button onClick={this.changed}>Class click me</button>
      </div>
    )
  }
}

export default CChangeEvent