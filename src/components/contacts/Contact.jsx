import React, { Component } from "react";
import PropTypes from "prop-types";
import Context from "../../context";
import { Link } from 'react-router-dom';

import axios from "axios";

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
  };

  onDeleteClick = async (id, dispatch) => {

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id })
    } catch(e) {

    }    
  };

  render() {
    const { id, name, email, phone } = this.props.contact; // DESTRUCTURING
    const { showContactInfo } = this.state;

    return (
      <Context.Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i style={{ cursor: "pointer" }} onClick={this.onShowClick}>
                  +
                </i>
                <p
                  style={{ color: "red", float: "right", cursor: "pointer" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  x
                </p>
                <Link 
                  to={`/contact/edit/${id}`} 
                  style={{ color: "red", float: "right", cursor: "pointer", marginRight: "5px"  }}
                >
                  e
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  //TIPIFICANDO OS PROPS
  static propTypes = {
    contact: PropTypes.object.isRequired
  };
}

export default Contact;
