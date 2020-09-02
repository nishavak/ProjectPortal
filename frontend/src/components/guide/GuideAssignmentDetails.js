import React, { Component } from "react";
import "./GuideAssignmentDetails.scss";
import { Link } from "react-router-dom";
import axios from "../../axios";
import $ from "jquery";
import { NotificationManager } from "react-notifications";
import GuideHeader from "./GuideHeader";
import { Route } from "react-router-dom";
import Loading from "../shared/Loading";

export class GuideAssignmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.assignmentId = this.props.match.params.assignmentId;
    this.groupId = this.props.match.params.groupId;
    this.ass_details = {};
    this.isTurnedIn = null;
    this.grade = {};
  }

  componentDidMount() {
    axios
      .get(`guideAssignmentDetails/${this.groupId}/${this.assignmentId}/`)
      .then(({ data }) => {
        this.ass_details = data;
        this.isTurnedIn = data.student_list[0].turned_in;
        data.student_list.map(
          (student) =>
            (this.grade = {
              ...this.grade,
              [student.student_roll_number]: student.grade,
            })
        );
        this.setState({ loading: false });
      })
      .catch((err) => this.props.history.goBack());
  }

  handleChange = (e) => {
    this.grade = {
      ...this.grade,
      [e.target.name]: parseInt(e.target.value),
    };
    console.log(this.grade);
    this.setState({ ...this.state });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // .filter((grade) => isNaN(grade))).length > 0
    // console.log(Object.entries(this.grade));
    let l = Object.entries(this.grade);
    let valid = true;
    for (let i = 0; i < l.length; i++) {
      const el = l[i];
      if (isNaN(el[1])) {
        valid = false;
        break;
      }
    }
    if (valid) {
      axios
        .put("guideAssignGrades/", { grade: this.grade, id: this.assignmentId })
        .then(() => {
          NotificationManager.success("Assignment Graded for the team");
        })
        .catch((err) => {
          NotificationManager.error(err.response.data);
        });
    } else NotificationManager.warning("Please enter valid marks");
  };

  render() {
    if (this.state.loading) return <Loading />;
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
                Due date :
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
                  {!$.isEmptyObject(this.ass_details)
                    ? this.ass_details.assignment_details
                      ? !this.ass_details.assignment_details.attachments.length
                        ? "No attachments"
                        : this.ass_details.assignment_details.attachments.map(
                            (attachment) => (
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
                            )
                          )
                      : ""
                    : ""}
                </ul>
              </div>
            </div>
          </div>

          <div className="row mx-0  mt-3 ">
            <div className="col-md-5 p-0">
              <div className="container shadow-sm p-3">
                <p className="lead">Team Submissions</p>
                <hr />
                <ul className="list-group">
                  {!$.isEmptyObject(this.ass_details)
                    ? !this.ass_details.team_submissions.length
                      ? "No team submissions"
                      : this.ass_details.team_submissions.map((file) => (
                          <li
                            className="attachment text-primary list-group-item border-0"
                            style={{ cursor: "pointer" }}
                            key={file.id}
                            onClick={() => window.open(file.file_url, "_blank")}
                          >
                            {file.file_name}
                          </li>
                        ))
                    : ""}
                </ul>
              </div>
            </div>
            <span className="col-md-1 p-0"></span>
            <div className="col-md-6 p-0">
              <div className="shadow-sm p-3 ">
                <p className="lead">Grades</p>
                <hr />
                <div className="">
                  <p className="d-flex " style={{ fontSize: "0.9em" }}>
                    <div className="col-3 p-0 ">Weightage :</div>
                    <div className="col-9 p-0">
                      {this.ass_details.assignment_details &&
                        this.ass_details.assignment_details.weightage}
                    </div>
                  </p>

                  <form onSubmit={this.handleSubmit}>
                    {this.ass_details.student_list &&
                      this.ass_details.student_list.map((grade) => (
                        <div className="container py-1">
                          <div className="row mb-2">
                            <div className="col-3 p-0 my-auto">
                              <span className="" style={{ fontSize: "0.9em" }}>
                                Student Roll Number:
                              </span>
                            </div>
                            <div className="col-9 p-0">
                              <span className="" style={{ fontSize: "0.9em" }}>
                                {grade.student_roll_number}
                              </span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-3 p-0 my-auto">
                              <span className="" style={{ fontSize: "0.9em" }}>
                                Grade :
                              </span>
                            </div>
                            <div className="col-9 p-0">
                              <input
                                type="number"
                                className="grade form-control w-50 shadow-sm "
                                name={grade.student_roll_number}
                                onChange={this.handleChange}
                                value={this.grade[grade.student_roll_number]}
                                placeholder="enter marks here"
                                disabled
                              />
                            </div>
                          </div>
                          <br />
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
                            $(".grade").attr("disabled", false);
                          }}
                          onMouseOver={() => {
                            if (!this.isTurnedIn) {
                              $('[data-toggle="tooltip"]').tooltip();
                            }
                          }}
                          disabled={this.isTurnedIn ? false : true}
                        >
                          Edit
                        </button>
                      </div>
                      <div className="col-md-3 p-0">
                        <button
                          type="submit"
                          className="btn btn-light shadow-sm"
                          onClick={() => {
                            $(".grade").attr("disabled", true);
                          }}
                          disabled={this.isTurnedIn ? false : true}
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
