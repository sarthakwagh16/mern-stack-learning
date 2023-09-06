import React, { Component } from 'react'

export class EventProps extends Component {

    constructor(props){
        super(props);

        this.state={
            roll:this.props.roll,
            name:"Sarthak"

        }
    }
    Greet=()=>{
        console.log("Hello roll num", this.props.roll);
    }
  render() {
    return (
      <div>
        <button onClick={this.Greet}>Greet me dear</button>
      </div>
    )
  }
}

export default EventProps