import React from "react";
import GuideHeader from "./GuideHeader";
import $ from "jquery";
import axios from "../../axios";
import Loading from "../shared/Loading";
import { Route } from "react-router-dom";
import { NotificationManager } from "react-notifications";

const area_of_interest1 = [
  "Artifical Intelligence (Machine Learning, Natural Language Processing, Robotics)",
  "Augmented Reality and Virtual Reality",
  "Big Data Processing",
  "Cloud Computing (High Performance Computing)",
  "Computer Networking",
  "Cyber Security (Forensics, Blockchain Technology, Biometrics Security, Cryptographic Techniques)",
  "Embedded and Hardware Integrated Applications (IOT)",
  "GIS",
  "Image Processing (Computer Vision)",
  "Other",
  "Quantum Computing",
  "System Programming (Compiler construction, OS, Device drivers)",
  "Software Testing Automation",
];

class GuideDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
    this.state = {
      loading: true,
      initials: "",
      interest1:
        "Artifical Intelligence (Machine Learning, Natural Language Processing, Robotics)",
      interest2:
        "Artifical Intelligence (Machine Learning, Natural Language Processing, Robotics)",
      interest3:
        "Artifical Intelligence (Machine Learning, Natural Language Processing, Robotics)",
      interest4:
        "Artifical Intelligence (Machine Learning, Natural Language Processing, Robotics)",
      thrust1: "Application Development",
      thrust2: "Application Development",
      thrust3: "Application Development",
      thrust4: "Application Development",
      preferences: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let preferences = [];
    let p1 = {
      area_of_interest: this.state.interest1,
      thrust_area: this.state.thrust1,
    };
    let p2 = {
      area_of_interest: this.state.interest2,
      thrust_area: this.state.thrust2,
    };
    let p3 = {
      area_of_interest: this.state.interest3,
      thrust_area: this.state.thrust3,
    };
    let p4 = {
      area_of_interest: this.state.interest4,
      thrust_area: this.state.thrust4,
    };
    preferences.push(p1);
    preferences.push(p2);
    preferences.push(p3);
    preferences.push(p4);
    // this.setState({ preferences: preferences });
    let data = {
      initials: this.state.initials,
      preferences: preferences,
    };
    axios
      .put("guideDetailsForm/", data)
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        NotificationManager.error(err.response.data);
      });
  };

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="details-form">
        <Route component={GuideHeader} />
        <br />
        <div className="mx-auto" style={{ width: "90%" }}>
          <div
            className="p-2 text-center shadow-sm rounded font-weight-bold  mx-auto"
            style={{
              color: "rgb(183, 32, 46)",
              fontSize: "1.1em",
              width: "80%",
              backgroundColor: "rgba(231, 231, 231, 0.459)",
            }}
          >
            Faculty Details
          </div>
          <br />
          <div
            className="mx-auto col-12 rounded p-4 rounded"
            style={{
              fontSize: "1.1em",
              width: "80%",
              backgroundColor: "rgba(231, 231, 231, 0.459)",
            }}
          >
            <br />
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="initials">Faculty Initials</label>
                <input
                  type="text"
                  name="initials"
                  id="initials"
                  onChange={this.handleChange}
                  value={this.state.initials}
                  className="form-control border-0"
                  required={true}
                />
              </div>
              <div className="form-group">
                <label htmlFor="interest1">Area of Interest 1</label>
                <select
                  type="interest1"
                  name="interest1"
                  id="interest1"
                  onChange={this.handleChange}
                  value={this.state.interest1}
                  required={true}
                  className="form-control border-0 text-center"
                >
                  {area_of_interest1.map((d) => (
                    <option value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="thrust1">
                  Thrust area associated with area of interest 1
                </label>
                <select
                  type="thrust1"
                  name="thrust1"
                  id="thrust1"
                  onChange={this.handleChange}
                  required={true}
                  value={this.state.thrust1}
                  className="form-control border-0 text-center"
                >
                  <option>Network and Security</option>
                  <option>Application Development</option>
                  <option>Information Management</option>
                  <option>Knowledge-based systems</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="interest2">Area of Interest 2</label>
                <select
                  type="interest2"
                  name="interest2"
                  id="interest2"
                  onChange={this.handleChange}
                  required={true}
                  value={this.state.interest2}
                  className="form-control border-0 text-center"
                >
                  {area_of_interest1.map((d) => (
                    <option value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="thrust2">
                  Thrust area associated with area of interest 2
                </label>
                <select
                  type="thrust2"
                  name="thrust2"
                  id="thrust2"
                  onChange={this.handleChange}
                  required={true}
                  value={this.state.thrust2}
                  className="form-control border-0 text-center"
                >
                  <option>Network and Security</option>
                  <option>Application Development</option>
                  <option>Information Management</option>
                  <option>Knowledge-based systems</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="interest3">Area of Interest 3</label>
                <select
                  type="interest3"
                  name="interest3"
                  id="interest3"
                  onChange={this.handleChange}
                  required={true}
                  value={this.state.interest3}
                  className="form-control border-0 text-center"
                >
                  {area_of_interest1.map((d) => (
                    <option value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="thrust3">
                  Thrust area associated with area of interest 3
                </label>
                <select
                  type="thrust3"
                  name="thrust3"
                  id="thrust3"
                  onChange={this.handleChange}
                  value={this.state.thrust3}
                  required={true}
                  className="form-control border-0"
                >
                  <option>Network and Security</option>
                  <option>Application Development</option>
                  <option>Information Management</option>
                  <option>Knowledge-based systems</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="interest4">Area of Interest 4</label>
                <select
                  type="interest4"
                  name="interest4"
                  id="interest4"
                  onChange={this.handleChange}
                  required={true}
                  value={this.state.interest4}
                  className="form-control border-0 text-center"
                >
                  {area_of_interest1.map((d) => (
                    <option value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="thrust4">
                  Thrust area associated with area of interest 4
                </label>
                <select
                  type="thrust4"
                  name="thrust4"
                  id="thrust4"
                  onChange={this.handleChange}
                  required={true}
                  value={this.state.thrust4}
                  className="form-control border-0 text-center"
                >
                  <option>Network and Security</option>
                  <option>Application Development</option>
                  <option>Information Management</option>
                  <option>Knowledge-based systems</option>
                </select>
              </div>
              <div className="text-center">
                <button className="btn btn-outline-success text-center mb-1">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default GuideDetailsForm;
