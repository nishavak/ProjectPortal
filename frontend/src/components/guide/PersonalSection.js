import React from "react";
import $ from "jquery";
import "./PersonalSection.scss";
import Loading from "../shared/Loading";
import GuideHeader from "./GuideHeader";
import axios from "../../axios";
import { NotificationManager } from "react-notifications";
import { Route } from "react-router-dom";

class PersonalSection extends React.Component {
  constructor(props) {
    super(props);
    this.personal_data = {};
    this.state = {
      loading: true,
    };
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
    } else {
      alert("Action cancelled");
    }
  };

  componentDidMount() {
    $("#change-password").on("shown.bs.modal", function () {
      $("#newPassword").focus();
    });
    axios
      .get(`guidePersonal/`)
      .then(({ data }) => {
        this.personal_data = data;
        this.setState({ loading: false });
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <>
        <div className='' id='personal-details'>
          <div
            className='bg-light p-2 px-3  text-center rounded shadow-sm font-weight-bold'
            style={{ color: "#5b9ecf", fontSize: "1.1em" }}>
            Personal Details
          </div>
          <div
            className='info-section p-3 mt-3  bg-light'
            style={{ letterSpacing: "0.1em" }}>
            <div>
              <p
                className='text-muted mb-1'
                style={{ fontSize: "1.3em", fontWeight: "550" }}>
                Name{" "}
              </p>
              <p style={{ fontSize: "1.1em" }}>
                {this.personal_data && this.personal_data.name}
              </p>
            </div>
            <hr />
            <div style={{}}>
              <p
                className='text-muted mb-1'
                style={{ fontSize: "1.3em", fontWeight: "550" }}>
                Initials{" "}
              </p>
              <p style={{ fontSize: "1.1em" }}>
                {this.personal_data && this.personal_data.initials}
              </p>
            </div>
            <hr />
            <div style={{}}>
              <p
                className='text-muted mb-1'
                style={{ fontSize: "1.3em", fontWeight: "550" }}>
                Email{" "}
              </p>
              <p style={{ fontSize: "1.1em" }}>
                {this.personal_data && this.personal_data.email}
              </p>
            </div>
            <hr />
            {this.personal_data && this.personal_data.preferences && (
              <>
                <div style={{}}>
                  <p
                    className='text-muted mb-1'
                    style={{ fontSize: "1.3em", fontWeight: "550" }}>
                    Area of Interests - Thrust Areas
                  </p>
                  {this.personal_data.preferences.map((p) => (
                    <p style={{ fontSize: "1.1em" }}>
                      {p.area_of_interest} - {p.thrust_area}
                    </p>
                  ))}
                </div>

                <hr />
              </>
            )}
            <div className=''>
              <span
                className='text-primary'
                style={{ cursor: "pointer" }}
                onClick={() => $("#new_picture").click()}>
                Update Profile Picture
              </span>
              <form hidden>
                <input
                  onChange={this.updateProfilePicture}
                  type='file'
                  name='new_picture'
                  id='new_picture'
                  accept='image/*'
                />
              </form>
            </div>
            <div className=''>
              <span
                className='text-primary'
                data-toggle='modal'
                data-target='#change-password'
                style={{ cursor: "pointer" }}>
                Change password
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default PersonalSection;
