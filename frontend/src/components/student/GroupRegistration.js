import React, { Component } from "react";
import axios from "../../axios";
import SomaiyaLogo from "../../assets/images/Somaiya.svg";
import GroupRegistrationImage from "../../assets/images/Group.gif";
import Loading from "../shared/Loading";
import { NotificationManager } from "react-notifications";

class GroupRegistration extends Component {
  constructor(props) {
    super(props);
    this.roll1 = "";
    this.state = {
      loading: true,
      roll2: "",
      roll3: "",
      roll4: "",
    };
  }

  componentDidMount() {
    axios.get("myRollNumber/").then(({ data }) => {
      this.roll1 = data;
      this.setState({ loading: false });
    });
  }

  signout = () => {
    axios
      .get("signOut/")
      .then(() => window.location.reload())
      .catch(() => window.location.reload());
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const that = this;
    let data = {
      roll2: that.state.roll2,
      roll3: that.state.roll3,
      roll4: that.state.roll4,
    };
    axios
      .post("createTeam/", data)
      .then(() => {
        console.log("team created");
      })
      .catch((err) => {
        // NotificationManager.error(err.message);
        console.log(err);
      });
  };

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div
        id="GroupRegistration"
        className="row mx-auto swing-in-top-fwd"
        style={{ minHeight: "100vh" }}
      >
        <img
          src={SomaiyaLogo}
          alt="KJSCE"
          className="d-none d-xl-block"
          style={{
            position: "fixed",
            top: "1em",
            left: "1em",
            zIndex: "1",
            zoom: "70%",
            height: "3em",
          }}
        />
        <div className="col-7 d-none d-xl-flex justify-content-center align-items-center">
          <img
            src={GroupRegistrationImage}
            alt="Group Registration"
            className="w-100"
          />
        </div>
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className="col-12 col-xl-5 d-flex flex-column mx-auto justify-content-center align-items-center"
        >
          <div className="form-group h3 mb-5 py-1">Group Registration</div>
          <div className="form-group w-100 required">
            <label htmlFor="roll1" className="control-label">
              Group Leader Roll Number
            </label>
            <input
              type="number"
              min="0"
              name="roll1"
              id="roll1"
              className="form-control"
              value={this.roll1}
              disabled
            />
            <small className="form-text text-danger">
              Group creator shall be marked as leader by default.
            </small>
          </div>
          <div className="form-group w-100">
            <label htmlFor="roll2" className="control-label">
              Member 2 Roll number
            </label>
            <input
              type="number"
              min="0"
              name="roll2"
              id="roll2"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.roll2}
              autoFocus
            />
          </div>
          <div className="form-group w-100">
            <label htmlFor="roll3">Member 3 Roll number</label>
            <input
              type="number"
              min="0"
              name="roll3"
              id="roll3"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.roll3}
            />
          </div>
          <div className="form-group w-100">
            <label htmlFor="roll4">Member 4 Roll number</label>
            <input
              type="number"
              min="0"
              name="roll4"
              id="roll4"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.roll4}
            />
          </div>
          <div className="form-group mt-3 w-100 d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark shadow-sm"
              onClick={this.signout}
            >
              <i className="fa fa-lock mr-2"></i>
              Sign out
            </button>
            <button type="submit" className="btn btn-success shadow-sm">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default GroupRegistration;
