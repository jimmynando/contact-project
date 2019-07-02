import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@gmail.com',
                phone: '11 987471144'
            },
            {
                id: 2,
                name: 'Karen Doe',
                email: 'karen@gmail.com',
                phone: '11 987471144'
            },
            {
                id: 3,
                name: 'Mary Doe',
                email: 'mary@gmail.com',
                phone: '11 987471144'
            }
        ]
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;