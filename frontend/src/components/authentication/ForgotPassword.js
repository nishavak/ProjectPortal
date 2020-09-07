import React, { Component } from "react";
import axios from "../../axios";
import { NotificationManager } from "react-notifications";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  somaiyaEmail = () =>
    this.state.email.match(/^\w+([.]?\w+)*@somaiya\.edu$/) ? true : false;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.somaiyaEmail())
      axios
        .post("forgot-password/", { email: this.state.email })
        .then(({ data }) => NotificationManager.success(data))
        .catch(({ response }) => {
          if (response.status === 404)
            NotificationManager.error("User not found");
          if (response.status === 403)
            NotificationManager.error("Account not verfied");
        });
    else NotificationManager.warning("Check email address");
  };

  render() {
    return (
      <div className="d-flex  min-vh-100 container justify-content-center align-items-center">
        <div className="d-flex flex-column shadow rounded w-75">
          <div
            className="bg-light h5 p-2 w-100"
            // style={{ color: "lightcoral" }}
          >
            Forgot Password
          </div>
          <div className="p-2">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="form-group my-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email here"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Send password reset link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
