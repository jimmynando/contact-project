import React, { Component } from 'react'
import { Context } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {

    state = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact});

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    } 

    render() {
        const { name, email, phone } = this.state;
        return (
            <Context.Consumer>
                {value => {
                    const { dispatch }  = value;
                    return(
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input 
                                            type="text" 
                                            value={name} 
                                            name="name" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter the name"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Email</label>
                                        <input 
                                            type="text" 
                                            value={email} 
                                            name="email" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter the email"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Phone</label>
                                        <input 
                                            type="text" 
                                            value={phone} 
                                            name="phone" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter the phone"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                                </form>
                            </div>                                
                        </div>
                    );
                }}                
            </Context.Consumer>
        )
    }
}

export default AddContact;
