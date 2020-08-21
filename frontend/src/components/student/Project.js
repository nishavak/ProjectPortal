import React, { Component } from "react";

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

    this.state = {
      registered: false,
      title: "",
      description: "",
      domain: domain[0],
      type: "Internal",
      interDisciplinaryReason: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center slide-in-fwd-center"
        style={{ minHeight: "100%" }}
      >
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              disabled={this.state.registered}
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
              disabled={this.state.registered}
              onChange={this.handleChange}
              name="description"
              id="description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type of project</label>
            <select
              disabled={this.state.registered}
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
                disabled={this.state.registered}
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
              disabled={this.state.registered}
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
          <div className="form-group">
            <button
              hidden={this.state.registered}
              disabled={this.state.registered}
              type="submit"
              className="btn btn-success"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="">
          <a href="#">Old project records</a>
        </div>
      </div>
    );
  }
}
