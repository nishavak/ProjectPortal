import React, { Component } from "react";
import UserImage from "../../assets/images/User.png";
import "./Profile.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Personal from "./Personal";
import Guide from "./Guide";
import Group from "./Group";
import Project from "./Project";
import axios from "../../axios";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.image = null;
  }

  componentDidMount() {
    axios.get("getImage/").then(({ data }) => {
      this.image = data;
      this.setState({});
    });
  }

  render() {
    return (
      <div
        id="Profile"
        className="slide-in-bottom container my-md-4 rounded-lg shadow d-flex flex-column flex-md-row p-0"
        style={{
          minHeight: "75vh",
          position: "relative",
        }}
      >
        <div
          className="col-12 col-md-3 bg-light rounded-left"
          style={{ minHeight: "100%" }}
        >
          <div className="p-md-3" style={{ height: "50%" }}>
            <img
              src={this.image || UserImage}
              alt="Student Roll Number"
              className="w-100 rounded shadow-sm"
            />
          </div>
          <nav
            id="Profile-Panel"
            className="nav flex-column text-center"
            style={{ minHeight: "50%" }}
          >
            <li className="nav-item">
              <span
                className="nav-link rounded my-2"
                style={{ cursor: "pointer" }}
                onClick={() => this.props.history.push("/profile/personal/")}
              >
                Personal
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link rounded my-2"
                style={{ cursor: "pointer" }}
                onClick={() => this.props.history.push("/profile/group/")}
              >
                Group
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link rounded my-2"
                style={{ cursor: "pointer" }}
                onClick={() => this.props.history.push("/profile/guide/")}
              >
                Guide
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link rounded my-2"
                style={{ cursor: "pointer" }}
                onClick={() => this.props.history.push("/profile/project/")}
              >
                Project
              </span>
            </li>
          </nav>
        </div>
        <div
          className="col-0 col-md-1"
          style={{ background: "linear-gradient(to right, #f8f9fa, #ffffff)" }}
        ></div>
        <div className="col-12 col-md-7 offset-md-1 p-md-2 my-5 my-xl-0">
          <Switch>
            <Route path="/profile/personal/" exact component={Personal} />
            <Route path="/profile/group/" exact component={Group} />
            <Route path="/profile/guide/" exact component={Guide} />
            <Route path="/profile/project/" exact component={Project} />
            <Redirect to="/profile/personal/" />
          </Switch>
        </div>
      </div>
    );
  }
}
