import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import SignInImage from "../../assets/images/SignIn.gif";
import axios from "../../axios";
export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("signIn/", this.state)
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        NotificationManager.error("Check credentials");
      });
  };
  render() {
    return (
      <div className="swing-in-top-fwd">
        <div
          className="d-flex min-vh-100"
          style={{ backgroundColor: "#f7f8fa" }}
        >
          <div className="d-none col-7 d-xl-flex justify-content-center align-items-center">
            <img src={SignInImage} alt="Sign in" className="w-100" />
          </div>
          <div className="d-flex col-12 col-xl-5 align-items-center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              className="w-100"
            >
              <div className="form-group">
                <h1 className="text-center">Sign In</h1>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  required
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control border-0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  required
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control border-0"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn text-primary m-0 p-0"
                  type="button"
                  onClick={() => this.props.history.push("/forgot-password")}
                >
                  Forgot password
                </button>
              </div>
              <div className="form-group d-flex justify-content-between">
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={() => this.props.history.push("/signup")}
                >
                  <span className="fa fa-fw mr-2 fa-user-circle"></span>
                  <span>Sign up</span>
                </button>
                <button className="btn btn-success" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
