import React, { Component } from 'react'

export class StateList extends Component {

    //another way to create a state is
    state = {
        users: [
            { id: 1, name: "Sarthak", class: "A" },
            { id: 2, name: "Jayesh", class: "B" },
            { id: 3, name: "Sunny", class: "C" },

        ]
    }

    render() {
        const data = this.state.users.map((user) => <h2>{user.id} {user.name}</h2>)
        return (
            <div>
                <ul>{data}</ul>
            </div>
        )
    }
}

export default StateList