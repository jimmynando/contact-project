import React, { Component } from 'react'
import { Context } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

    state = {
        id: '',
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        if(name === '') {
            this.setState({errors: {name: 'Name is required'}})
            return;
        }
        if(email === '') {
            this.setState({errors: {email: 'Email is required'}})
            return;
        }
        if(phone === '') {
            this.setState({errors: {phone: 'Phone is required'}})
            return;
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone,
            errors: {}
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact});

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    } 

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Context.Consumer>
                {value => {
                    const { dispatch }  = value;
                    return(
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        label="Name"
                                        type="text" 
                                        value={name} 
                                        name="name" 
                                        className="form-control form-control-lg" 
                                        placeholder="Enter the name"
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        label="Email"
                                        type="text" 
                                        value={email} 
                                        name="email" 
                                        className="form-control form-control-lg" 
                                        placeholder="Enter the email"
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup 
                                        label="Phone"
                                        type="text" 
                                        value={phone} 
                                        name="phone" 
                                        className="form-control form-control-lg" 
                                        placeholder="Enter the phone"
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
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
