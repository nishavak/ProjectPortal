import React, { Component } from "react";
import $ from "jquery";

export default class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  updateProfilePicture = (event) => {
    const { target } = event;
    let response = window.confirm("Update profile picture");
    if (response) {
      setTimeout(() => {
        alert("Updated");
        window.location.reload();
      }, 2000);
    } else {
      alert("Action cancelled");
    }
  };

  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center slide-in-fwd-center"
        style={{ minHeight: "100%" }}
      >
        <div className="">
          <b>Name</b>
          <p>Nishavak Santosh Naik</p>
        </div>
        <div className="">
          <b>Email</b>
          <p>nishavak.n@somaiya.edu</p>
        </div>
        <div className="">
          <b>Roll number</b>
          <p>1814040</p>
        </div>
        <div className="">
          <b>Branch</b>
          <p>Information Technology</p>
        </div>
        <div className="">
          <a onClick={() => $("#new_picture").click()} href="#">
            Update Profile Picture
          </a>
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
          <a href="/change-password/">Change password</a>
        </div>
      </div>
    );
  }
}
