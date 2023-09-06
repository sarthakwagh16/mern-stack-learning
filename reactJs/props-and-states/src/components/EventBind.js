import React, { Component } from 'react';

/*
The bind() is an inbuilt method in React that is used to pass the data 
as an argument to the function of a class based component.

it is used to access this keyword
*/
export class EventBind extends Component {

  constructor() {
    super();

    //this.changeEvent=this.changeEvent.bind(this);
    //use above method when we define fun not using arrow fun
    this.state = {
      course: "BE"
    }
  }

  changeEvent = () => {
    this.setState({
      course:"BTech"
    })

    console.log("Hello from", this.state.course);
  }


  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Hit me</button>
      </div>
    )
  }
}

export default EventBind