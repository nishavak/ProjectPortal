import axios from "../../axios";
import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import Loading from "../shared/Loading";

const domain = [
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

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.registered = null;
    this.amILeader = false;
    this.state = {
      loading: true,
      title: "",
      description: "",
      domain: domain[0],
      type: "Internal",
      interDisciplinaryReason: "",
    };
  }

  componentDidMount() {
    axios
      .get("getProject/")
      .then(({ data }) => {
        axios
          .get("amILeader/")
          .then(({ data }) => {
            this.amILeader = data;
          })
          .catch((err) => {});
        if (data.registered === true) {
          this.registered = data.registered;
          this.setState({
            title: data.title || "",
            description: data.description || "",
            domain: data.domain || domain[0],
            type: data.type || "Internal",
            interDisciplinaryReason: data.interDisciplinaryReason || "",
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
        this.setState({ loading: false });
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("createProject/", this.state)
      .then(({ data }) => NotificationManager.success(data))
      .catch((err) => NotificationManager.error(err.reponse.data));
  };

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div
        className="d-flex flex-column justify-content-center slide-in-fwd-center"
        style={{ minHeight: "100%" }}
      >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              value={this.state.title}
              disabled={this.registered}
              onChange={this.handleChange}
              type="text"
              name="title"
              id="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              value={this.state.description}
              disabled={this.registered}
              onChange={this.handleChange}
              name="description"
              id="description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type of project</label>
            <select
              value={this.state.type}
              disabled={this.registered}
              onChange={this.handleChange}
              className="custom-select"
              name="type"
              id="type"
            >
              <option value="Internal" selected>
                Internal
              </option>
              <option value="External">External</option>
              <option value="Inter-disciplinary">Inter-disciplinary</option>
            </select>
          </div>
          {this.state.type === "Inter-disciplinary" && (
            <div className="form-group">
              <label htmlFor="interDisciplinaryReason">
                Inter-disciplinary reason
              </label>
              <textarea
                value={this.state.interDisciplinaryReason}
                disabled={this.registered}
                onChange={this.handleChange}
                name="interDisciplinaryReason"
                id="interDisciplinaryReason"
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Provide the reason why are have you opted for Inter-disciplinary project"
              ></textarea>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="domain">Domain</label>
            <select
              value={this.state.domain}
              disabled={this.registered}
              onChange={this.handleChange}
              className="custom-select"
              name="domain"
              id="domain"
            >
              {domain.map((d) => (
                <option value={d}>{d}</option>
              ))}
            </select>
          </div>
          {this.amILeader && !this.registered ? (
            <div className="form-group">
              <button
                hidden={this.registered}
                disabled={this.registered}
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="form-group">
              <button
                hidden={this.registered}
                disabled={this.registered}
                type="button"
                className="btn btn-danger"
                onClick={() => alert("Cancel request")}
              >
                Cancel request
              </button>
            </div>
          )}
        </form>
        <div className="">
          <a href="#">Old project records</a>
        </div>
      </div>
    );
  }
}
