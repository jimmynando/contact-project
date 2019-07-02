import React, { Component } from 'react'

class AddContact extends Component {


    state = {
        name: '',
        email: '',
        phone: ''
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                value={name} 
                                name="name" 
                                className="form-control form-control-lg" 
                                placeholder="Enter the name"
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
                            />
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                </div>
                                
            </div>
        )
    }
}

export default AddContact;
