import React from "react";
// import app from "../../Firebase";
import axios from "../../axios";
import $ from "jquery";

const branch = [
  "Information Technology",
  "Computer Science",
  "Electrical",
  "Electronics and Telecommunication",
  "Mechanical",
];

class FacultyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      branch: branch[0],
    };
  }
  somaiyaEmail = () =>
    this.state.email.match(/^\w+([.]?\w+)*@somaiya\.edu$/) ? true : false;
  securePassword = () =>
    this.state.password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/,
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
  raiseAlert = (type, message) => {
    $("#signup-feedback")
      .html(() =>
        $("<div>", {
          class: `alert alert-${type}`,
          role: "alert",
        }).html(message),
      )
      .fadeIn();
  };
  isFormValid = () => {
    return this.somaiyaEmail() &&
      this.securePassword() &&
      this.state.password === this.state.confirmPassword &&
      this.state.name !== "" &&
      branch.includes(this.state.branch)
      ? true
      : false;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    $("#signup-feedback").fadeOut("fast", () => $(this).html(""));
    // if (this.isFormValid())
    // app.auth()
    // 	.createUserWithEmailAndPassword(
    // 		this.state.email,
    // 		this.state.password
    // 	)
    // 	.then(({ user }) => {
    // 		app.firestore()
    // 			.collection("users")
    // 			.doc(user.uid)
    // 			.set({
    // 				name: this.state.name,
    // 				email: this.state.email,

    // 				branch: this.state.branch,
    // 				group: null,
    // 				isLeader: false,
    // 				emailVerified: false,
    // 				userType: "student",
    // 			})
    // 			.then(() => {
    // 				user.updateProfile({
    // 					displayName: this.state.name,
    // 				});
    // 				user.sendEmailVerification().then(() => {
    // 					this.raiseAlert(
    // 						"success",
    // 						"Verification email has been sent.<br />Please sign in after verification to complete registration process."
    // 					);
    // 				});
    // 			})
    // 			.catch((err) => this.raiseAlert("danger", err.message))
    // 			.finally(() => app.auth().signOut());
    // 	})
    // 	.catch((err) => this.raiseAlert("danger", err.message));
    // else this.raiseAlert("warning", "Form should not be tampered.");
  };
  render() {
    return (
      <div className='faculty-form mx-auto' style={{ width: "90%" }}>
        <br />
        <div
          className='p-2 text-center shadow-sm rounded font-weight-bold  mx-auto'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Faculty Sign Up Form
        </div>
        <br />
        <div
          className='col-12 col-xl-12 d-flex flex-column rounded justify-content-center overflow-auto '
          style={{
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          <br />
          <form autoComplete='off' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Faculty Name</label>
              <input
                type='text'
                name='name'
                id='name'
                className='form-control border-0'
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='branch'>Branch</label>
              <select
                name='branch'
                id='branch'
                className='custom-select border-0'
                onChange={this.handleChange}
                value={this.state.branch}>
                {branch.map((branchItem) => (
                  <option value={branchItem} key={branch.indexOf(branchItem)}>
                    {branchItem}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                className='form-control border-0'
                onChange={this.handleChange}
              />
              <small className='form-text invalid-feedback'>
                Please use valid <b>Somaiya</b> email address.
              </small>
              <small
                className='form-text text-muted text-right'
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.setState(
                    {
                      email: this.state.email + "@somaiya.edu",
                    },
                    () => {
                      $("#email").val(this.state.email).focus();
                      if (this.somaiyaEmail()) {
                        $("#email")
                          .addClass("is-valid")
                          .removeClass("is-invalid");
                      } else {
                        $("#email")
                          .addClass("is-invalid")
                          .removeClass("is-valid");
                      }
                    },
                  );
                }}>
                append @somaiya.edu
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                className='form-control border-0'
                onChange={this.handleChange}
              />
              <small className='form-text invalid-feedback'>
                Password not secure enough.
              </small>
              <small className='form-text text-muted'>
                At least 8 characters—the more characters, the better.
                <br /> A mixture of both uppercase and lowercase letters.
                <br /> A mixture of letters and numbers.
                <br /> Inclusion of at least one special character, e.g., ! @ #
                ? &#93;
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='confirmPassword'>Re-enter password</label>
              <input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                className='form-control border-0'
                onChange={this.handleChange}
                disabled={!this.securePassword()}
              />
              <small className='form-text invalid-feedback'>
                Passwords do not match.
              </small>
            </div>
            <div className='form-group d-flex justify-content-between'>
              <button
                className='btn btn-success'
                disabled={!this.isFormValid()}>
                Create faculty credentials
              </button>
            </div>
            <div className='form-group' id='signup-feedback' />
          </form>
        </div>
        <br />
      </div>
    );
  }
}

export default FacultyForm;
