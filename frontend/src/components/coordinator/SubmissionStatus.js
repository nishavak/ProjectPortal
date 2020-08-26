import React, { Component } from "react";
import "./SubmissionStatus.scss";
import $ from "jquery";
import { Redirect } from "react-router-dom";
// import AssignmentListGIF from "../student/AssignmentList.gif";
import axios from "../../axios";
import { Link } from "react-router-dom";
class SubmissionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "All",
    };
    this.status = [];
    this.ass_id = null;
  }
  componentDidMount() {
    axios
      .get(`coordinatorAssignmentDetail/${this.props.id}/`)
      .then(({ data }) => {
        console.log(this.state.category);
        this.status = data.submissionStatus;
        this.ass_id = data.assignment_details.assignment.assignment_id;
        this.setState({});
      });
  }

  render() {
    return (
      <div>
        <div id="submission-status" className="container pt-3">
          <ul className="nav nav-pills nav-justified nav-fill">
            <li
              className="nav-item nav-link active"
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                let { target } = event;
                this.setState({ category: "All" }, () => {
                  $(".nav-item.nav-link.active").removeClass("active");
                  $(target).addClass("active");
                });
              }}
            >
              All
            </li>
            <li
              className="nav-item nav-link"
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                let { target } = event;

                this.setState({ category: "Graded" }, () => {
                  $(".nav-item.nav-link.active").removeClass("active");
                  $(target).addClass("active");
                });
              }}
            >
              Graded
            </li>
            <li
              className="nav-item nav-link"
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                let { target } = event;

                this.setState({ category: "Submitted" }, () => {
                  $(".nav-item.nav-link.active").removeClass("active");
                  $(target).addClass("active");
                });
              }}
            >
              Submitted
            </li>
            <li
              className="nav-item nav-link"
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                let { target } = event;

                this.setState({ category: "Unsubmitted" }, () => {
                  $(".nav-item.nav-link.active").removeClass("active");
                  $(target).addClass("active");
                });
              }}
            >
              Not Submitted yet
            </li>
          </ul>
          <br />
          <div class="table-responsive-sm">
            <table class="ui striped table">
              <thead
                class="text-center"
                style={{ fontFamily: `'Courier New', Courier, monospace` }}
              >
                <tr class="">
                  <th class="" scope="col">
                    Group Number
                  </th>
                  <th class="" scope="col">
                    Submission Status
                  </th>
                </tr>
              </thead>
              <tbody class="text-center">
                {this.status &&
                  this.status.map((element) => {
                    if (element.status === this.state.category) {
                      return (
                        <tr
                          class=""
                          onClick={() => {
                            window.location.href = `/group-submission/${this.ass_id}/${element.team_id}`;
                          }}
                        >
                          <td class="">{element.team_id}</td>
                          <td class="">{element.status || "-"}</td>
                        </tr>
                      );
                    } else if (this.state.category === "All") {
                      return (
                        <tr
                          class=""
                          onClick={() => {
                            window.location.href = `/group-submission/${this.ass_id}/${element.team_id}`;
                          }}
                        >
                          <td class="">{element.team_id}</td>
                          <td class="">{element.status || "-"}</td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmissionStatus;
