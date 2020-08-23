import React, { Component } from "react";
import axios from "../../axios";
import $ from "jquery";
import { NotificationManager } from "react-notifications";

export default class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
    this.data = {};
  }

  updateProfilePicture = (event) => {
    const { target } = event;
    let response = window.confirm("Update profile picture");
    if (response) {
      let formData = new FormData();
      formData.append("photo", target.files[0]);
      axios
        .post("changePhoto/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => window.location.reload())
        .catch((err) => {
          NotificationManager.error("Error updating profile picture");
        });

      window.location.reload();
    } else {
      alert("Action cancelled");
    }
  };

  componentDidMount() {
    $("#change-password").on("shown.bs.modal", function () {
      $("#newPassword").focus();
    });
    axios.get("studentPersonal/").then(({ data }) => {
      this.data = data;
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading)
      return (
        <div
          className="d-flex flex-column justify-content-center"
          style={{ minHeight: "100%" }}
        >
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    return (
      <div
        className="d-flex flex-column justify-content-center slide-in-fwd-center"
        style={{ minHeight: "100%" }}
      >
        <div className="">
          <b>Name</b>
          <p>{this.data.name}</p>
        </div>
        <div className="">
          <b>Email</b>
          <p>{this.data.email}</p>
        </div>
        <div className="">
          <b>Roll number</b>
          <p>{this.data.roll_number}</p>
        </div>
        <div className="">
          <b>Branch</b>
          <p>{this.data.branch}</p>
        </div>
        <div className="">
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => $("#new_picture").click()}
          >
            Update Profile Picture
          </span>
          <form hidden>
            <input
              onChange={this.updateProfilePicture}
              type="file"
              name="new_picture"
              id="new_picture"
              accept="image/*"
            />
          </form>
        </div>
        <div className="">
          <span
            className="text-primary"
            data-toggle="modal"
            data-target="#change-password"
            style={{ cursor: "pointer" }}
          >
            Change password
          </span>
        </div>
      </div>
    );
  }
}
