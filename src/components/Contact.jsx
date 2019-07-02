import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {    
    constructor() {
        super();
        this.state = {
            showContactInfo: false
        }; 
    }       
    
    onShowClick = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    }

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render() {
        const { name, email, phone } = this.props.contact; // DESTRUCTURING
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>
                    { name }
                    <i style={{cursor: 'pointer'}} onClick={ this.onShowClick }>
                        +
                    </i>
                    <p style={{color: 'red', float: 'right', cursor: 'pointer'}} onClick={ this.onDeleteClick }>
                        x
                    </p>
                </h4>
                { showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">{ email }</li>
                        <li className="list-group-item">{ phone }</li>
                    </ul>
                ) : null }              
                
            </div>
        )
    }

    //TIPIFICANDO OS PROPS
    static propTypes = {
        contact: PropTypes.object.isRequired,
        deleteClickHandler: PropTypes.func.isRequired,
        duplicateClickHandler: PropTypes.func.isRequired
    };

}

export default Contact;