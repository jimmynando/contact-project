import React, { Component } from 'react';
import Contact from './Contact'
import { Context } from '../context';

class Contacts extends Component {

    render() {

        return (
            <Context.Consumer>
                {value => {
                    const { contacts } = value;
                    return(
                        <React.Fragment>
                            { contacts.map(contact =>
                                <Contact 
                                    key={contact.id} 
                                    contact={contact}
                                />
                            ) }
                        </React.Fragment>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default Contacts;