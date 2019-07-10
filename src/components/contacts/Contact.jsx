import React, { Component } from "react";
import PropTypes from "prop-types";
import Context from "../../context";

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

  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
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
