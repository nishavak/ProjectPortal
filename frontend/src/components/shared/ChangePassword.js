import $ from "jquery";
import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import axios from "../../axios";

export default class ChangePassword extends Component {
  state = { newPassword: "" };
  securePassword = () =>
    this.state.newPassword.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,128}$/
    )
      ? true
      : false;
  handleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value }, () => {
      if (this.securePassword()) {
        $("#newPassword").addClass("is-valid").removeClass("is-invalid");
      } else {
        $("#newPassword").addClass("is-invalid").removeClass("is-valid");
      }
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.securePassword())
      axios
        .post("changePassword/", this.state)
        .then(() => {
          $("#change-password").modal("hide");
          NotificationManager.success("Password updated");
        })
        .catch((err) => {
          $("#change-password").modal("hide");
          NotificationManager.error("Error updating password");
        });
    else NotificationManager.error("Form tampered");
  };
  render() {
    return (
      <div
        className="modal fade"
        id="change-password"
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content border-0 shadow-sm">
            <div className="modal-body">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="newPassword">New password</label>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    className="form-control"
                    required
                    onChange={this.handleChange}
                  />
                  <small className="form-text invalid-feedback">
                    Password not secure.
                  </small>
                  <small className="form-text text-muted">
                    At least 8 characters—the more characters, the better.
                    <br /> A mixture of both uppercase and lowercase letters.
                    <br /> A mixture of letters and numbers.
                    <br /> Inclusion of at least one special character, e.g., !
                    @ # ? &#93;
                  </small>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-warning"
                    disabled={!this.securePassword()}
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
