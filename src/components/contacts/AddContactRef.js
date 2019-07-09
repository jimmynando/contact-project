import React, { Component } from 'react'

class AddContact extends Component {   
    
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }

    };

    static defaultProps = {
        name: "Fernando",
        email: "jimmynando@gmail.com",
        phone: "11 987471144"
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                defaultValue={name} 
                                name="name" 
                                className="form-control form-control-lg" 
                                placeholder="Enter the name"
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input 
                                type="text" 
                                defaultValue={email} 
                                name="email" 
                                className="form-control form-control-lg" 
                                placeholder="Enter the email"
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input 
                                type="text" 
                                defaultValue={phone} 
                                name="phone" 
                                className="form-control form-control-lg" 
                                placeholder="Enter the phone"
                                ref={this.phoneInput}
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
