import $ from "jquery";
import axios from "../../axios";
import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import SignUpImage from "../../assets/images/SignUp.gif";

const branch = [
  "Information Technology",
  "Computer Science",
  "Electronics",
  "Electronics and Telecommunication",
  "Mechanical",
];

export class SignUp extends Component {
  state = {
    rollNumber: "",
    branch: branch[0],
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  somaiyaEmail = () =>
    this.state.email.match(/^\w+([.]?\w+)*@somaiya\.edu$/) ? true : false;

  securePassword = () =>
    this.state.password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,128}$/
    )
      ? true
      : false;

  handleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value }, () => {
      if (target.name === "email") {
        if (this.somaiyaEmail()) {
          $("#email").addClass("is-valid").removeClass("is-invalid");
        } else {
          $("#email").addClass("is-invalid").removeClass("is-valid");
        }
      } else if (target.name === "password") {
        if (this.securePassword()) {
          $("#password").addClass("is-valid").removeClass("is-invalid");
          if (this.state.password === this.state.confirmPassword) {
            $("#confirmPassword")
              .addClass("is-valid")
              .removeClass("is-invalid");
          } else {
            $("#confirmPassword")
              .addClass("is-invalid")
              .removeClass("is-valid");
          }
        } else {
          $("#password").addClass("is-invalid").removeClass("is-valid");
          $("#confirmPassword").removeClass("is-valid is-invalid");
        }
      } else if (target.name === "confirmPassword") {
        if (this.state.password === this.state.confirmPassword) {
          $("#confirmPassword").addClass("is-valid").removeClass("is-invalid");
        } else {
          $("#confirmPassword").addClass("is-invalid").removeClass("is-valid");
        }
      }
    });
  };

  isFormValid = () => {
    return this.somaiyaEmail() &&
      this.securePassword() &&
      this.state.password === this.state.confirmPassword &&
      this.state.rollNumber !== "" &&
      this.state.name !== "" &&
      branch.includes(this.state.branch)
      ? true
      : false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      axios
        .post("signUp/", this.state)
        .then(() => {
          NotificationManager.success(
            "Please verify your email and sign in.",
            "Signed up.",
            6000,
            () => this.props.history.push("signIn/"),
            true
          );
        })
        .catch((err) => {
          console.error(err);
          NotificationManager.error("Error signing up");
        });
    } else NotificationManager.error("Form has been tampered");
  };

  render() {
    return (
      <div className="swing-in-top-fwd">
        <div
          className="d-flex min-vh-100"
          style={{ backgroundColor: "#f9f3ed" }}
        >
          <div className="d-none col-7 d-xl-flex justify-content-center align-items-end">
            <img src={SignUpImage} alt="" className="w-100" />
          </div>
          <div className="d-flex col-12 col-xl-5 align-items-center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              className="w-100"
            >
              <div className="form-group">
                <h1 className="text-center">Sign Up</h1>
              </div>
              <div
                className="form-group jello-horizontal rounded p-2 shadow bg-dark text-white"
                // hidden
              >
                <b className="form-text">Student please note that</b>
                <small className="form-text">
                  <p className="p-0 m-0">All fields are compulsary.</p>
                  <p className="p-0 m-0">
                    A verification mail will be sent to your email address after
                    signing up.
                  </p>
                  <p className="p-0 m-0">
                    Without verification one cannot log in to their account.
                  </p>
                  <p className="p-0 m-0">
                    Except password, other fields cannot be changed later.
                  </p>
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="rollNumber">Roll number</label>
                <input
                  required
                  onChange={this.handleChange}
                  type="number"
                  min="1000000"
                  name="rollNumber"
                  id="rollNumber"
                  className="form-control border-0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <select
                  name="branch"
                  id="branch"
                  className="custom-select border-0"
                  onChange={this.handleChange}
                  value={this.state.branch}
                >
                  {branch.map((branchItem) => (
                    <option value={branchItem} key={branch.indexOf(branchItem)}>
                      {branchItem}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  required
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  id="name"
                  className="form-control border-0"
                />
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
                <small className="form-text invalid-feedback">
                  Please enter valid somaiya email address
                </small>
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
                <small className="form-text invalid-feedback">
                  Password not secure
                </small>
                <small className="form-text text-muted">
                  At least 8 characters—the more characters, the better.
                  <br /> A mixture of both uppercase and lowercase letters.
                  <br /> A mixture of letters and numbers.
                  <br /> Inclusion of at least one special character, e.g., ! @
                  # ? &#93;
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  required
                  onChange={this.handleChange}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-control border-0"
                  disabled={!this.securePassword()}
                />
                <small className="form-text invalid-feedback">
                  Passwords do not match
                </small>
              </div>
              <div className="form-group"></div>
              <div className="form-group d-flex justify-content-between">
                <button
                  className="btn btn-light text-primary"
                  type="button"
                  onClick={() => this.props.history.push("/signin")}
                >
                  <span className="fa fa-fw mr-2 fa-chevron-left"></span>
                  <span>Sign in</span>
                </button>
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={!this.isFormValid()}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
