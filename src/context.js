import React, { Component } from 'react';

export const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload)
            }
        default:
            return state
    }
}

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
        ],
        dispatch: action => 
            this.setState(state => reducer(state, action))
        
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
