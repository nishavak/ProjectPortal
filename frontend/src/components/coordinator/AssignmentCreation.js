import React from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import "./AssignmentCreation.scss";

export default class AssignmentCreation extends React.Component {
  constructor() {
    super();
    this.state = {
      due: new Date(),
      posted: new Date().toLocaleString("en-IN"),
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onDateChange = (date) => this.setState({ due: date.toLocaleString("en-IN") });
  render() {
    return (
      <div className="assignment-details mx-auto " style={{ width: "85%" }}>
        <br />
        <div
          className="p-2 text-center shadow-sm rounded font-weight-bold  mx-auto"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Create Assignment
        </div>
        <div className="p-3 text-center form-section mx-auto border mt-4 ">
          <div className="mt-4">
            <form
              id="assignment-form"
              onSubmit={(e) => {
                e.preventDefault();

                let i;
                for (
                  i = 0;
                  i <
                  document.getElementById("assignment-form").elements.length;
                  i++
                ) {
                  document.getElementById("assignment-form").elements[i].value =
                    "";
                }
                axios
                  .post("coordinatorCreateAssignment/", this.state)
                  .catch((err) => console.log(err));
              }}
            >
              <div className="form-group">
                <label for="title">
                  Title <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter title here ..."
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label for="description">Descriptional (optional)</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="Enter description here ..."
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label for="weightage">Weightage</label>
                <input
                  type="number"
                  className="form-control"
                  id="weightage"
                  name="weightage"
                  placeholder="Enter marks weightage here..."
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group d-flex flex-md-row flex-column">
                <div className="col-md-6 p-1">
                  <p>Due Date and Time</p>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    onChange={this.handleChange}
                    value={this.state.due}
                  />
                  {/* <Datetime onChange={this.handleChange} open={false} /> */}
                </div>
                <div className="col-md-6 p-1">{/* <Uploader /> */}</div>
              </div>
              <div className="form-group">
                <br />
                <button type="submit" className="btn btn-light">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
        <Link to="/assignments">
          <div className="back-button mx-auto p-2 text-center my-5 rounded-lg text-wrap text-break">
            <i className="fa fa-arrow-left mr-2" aria-hidden="true" />
            Back to Assignments
          </div>
        </Link>
      </div>
    );
  }
}
