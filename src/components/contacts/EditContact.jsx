import React, { Component } from "react";
import Context from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

import axios from "axios";

class EditContact extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Context.Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
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
                  <input
                    type="submit"
                    value="Edit Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default EditContact;
