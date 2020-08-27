import React, { Component } from "react";
import "./GuideAssignmentDetails.scss";
import { Link } from "react-router-dom";
import axios from "../../axios";
import $ from "jquery";
import { NotificationManager } from "react-notifications";
import GuideHeader from "./GuideHeader";
import { Route } from "react-router-dom";

export class GuideAssignmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTurnedIn: false,
    };
    this.assignmentId = this.props.match.params.assignmentId;
    this.groupId = this.props.match.params.groupId;
    this.ass_details = {};
  }

  componentDidMount() {
    axios
      .get("guideAssignmentDetails/${this.groupId}/${this.assignmentId}/")
      .then(({ data }) => {
        this.ass_details = data;
      })
      .catch((err) => this.props.history.goBack());
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      grade: this.state.grade,
    };
    axios
      .put("guideAssignGrades/", data)
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        NotificationManager.error(err.response.data);
      });
  };

  render() {
    return (
      <div>
        <Route component={GuideHeader} />
        <div
          id="guide-assignment-details"
          className="container-fluid m-auto p-3"
          style={{ width: "90%" }}
        >
          <div className="shadow-sm p-3">
            <div className="py-1">
              <span
                className="lead"
                style={{ fontSize: "1.3em", fontWeight: "500" }}
              >
                {this.ass_details.assignment_details &&
                  this.ass_details.assignment_details.title}
              </span>
            </div>
            <div className="row">
              <div
                className="col-md-4 col-12 text-muted"
                style={{ fontSize: "0.9em" }}
              >
                Due date :{" "}
                {this.ass_details.assignment_details &&
                  this.ass_details.assignment_details.due}
              </div>
              <div
                className="col-md-4 col-12 text-muted"
                style={{ fontSize: "0.9em" }}
              >
                Posted on:{" "}
                {this.ass_details.assignment_details &&
                  this.ass_details.assignment_details.posted}
              </div>
            </div>
            <hr />
            <div>
              <div className="description">
                {this.ass_details.assignment_details &&
                  this.ass_details.assignment_details.description}
              </div>
              <div className="attachments d-md-flex">
                <ul className="list-group">
                  {!$.isEmptyObject(this.ass_details) &&
                  !this.ass_details.attachments.length
                    ? "No attachments"
                    : this.ass_details.attachments.map((attachment) => (
                        <li
                          className="attachment text-primary list-group-item border-0"
                          style={{ cursor: "pointer" }}
                          key={attachment.id}
                          onClick={() =>
                            // (window.location.href = `${attachment.file_url}`)
                            window.open(attachment.file_url, "_blank")
                          }
                        >
                          {attachment.file_name}
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row mx-0  mt-3 ">
            <div className="col-md-6 p-0">
              <ul className="list-group">
                {!$.isEmptyObject(this.ass_details) &&
                !this.ass_details.team_submissions.length
                  ? "No team submissions"
                  : this.ass_details.team_submissions.map((file) => (
                      <li
                        className="attachment text-primary list-group-item border-0"
                        style={{ cursor: "pointer" }}
                        key={file.id}
                        onClick={() =>
                          // (window.location.href = `${file.file_url}`)
                          window.open(file.file_url, "_blank")
                        }
                      >
                        {file.file_name}
                      </li>
                    ))}
              </ul>
            </div>
            <div className="col-md-6 p-0">
              <div className=" shadow-sm p-3 ">
                <p className="lead">Grades</p>
                <hr />
                <div className="">
                  <p className="d-flex " style={{ fontSize: "0.9em" }}>
                    <div className="col-3 p-0 ">Weightage :</div>
                    <div className="col-3 ">
                      {this.ass_details.assignment_details &&
                        this.ass_details.assignment_details.weightage}
                    </div>
                  </p>

                  <form onSubmit={this.handleSubmit}>
                    {this.grade && this.grade.map((grade) => (
                    <div className="d-flex py-1">
                      <div className="col-3 p-0  my-auto">
                      <span className="" style={{ fontSize: "0.9em" }}>
                          Student Roll Number: {grade.student_roll_number}
                        </span>
                        <span className="" style={{ fontSize: "0.9em" }}>
                          Grade :
                        </span>
                      </div>
                      <div className="col-9 p-0 ">
                        <input
                          type="number"
                          id="grade"
                          className="form-control w-50 shadow-sm "
                          name="grade"
                          onChange = {this.handleChange}
                          value={this.ass_details.student_data.grade}
                          placeholder="enter marks here"
                          disabled
                        />
                      </div>
                    </div>
                    ))}
                    <div />
                    <div className="d-flex justify-content-start pt-3">
                      <div className="col-md-3 p-0">
                        <button
                          type="button"
                          className="btn btn-light shadow-sm"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Buttons in grade section will be disabled if there are no submissions"
                          onClick={() => {
                            $("#grade").attr("disabled", false);
                          }}
                          onMouseOver={() => {
                            if (!this.state.isTurnedIn) {
                              $('[data-toggle="tooltip"]').tooltip();
                            }
                          }}
                          disabled={this.state.isTurnedIn ? false : true}
                        >
                          Edit
                        </button>
                      </div>
                      <div className="col-md-3 p-0">
                        <button
                          type="submit"
                          className="btn btn-light shadow-sm"
                          onClick={() => {
                            $("#grade").attr("disabled", true);
                          }}
                          disabled={this.state.isTurnedIn ? false : true}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuideAssignmentDetails;
