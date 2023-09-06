import React from "react";

/*
React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

refer state object anywhere in the component by using the this.state.propertyname

**Important**
To change a value in the state object, use the this.setState() method.

When a value in the state object changes, the component will re-render, 
meaning that the output will change according to the new value(s).

Always use the setState() method to change the state object, it will ensure that the component 
knows its been updated and calls the render() method (and all the other lifecycle methods).
*/

class Channel extends React.Component {

    //The state object is initialized in the constructor:
    constructor() {

        super();

        //The state object can contain as many properties as you like:
        this.state = {
            msg: 'Welcome to my YouTube channel'
        }
    }

    subscribe() {
        this.setState({
            msg: 'Thanks for subscribing to my channel'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => { this.subscribe() }}>SubScribe</button>
            </div>
        )
    }

}
export default Channel;

