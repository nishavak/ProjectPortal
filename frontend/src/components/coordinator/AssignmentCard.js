import React, { Component } from "react";
import "./AssignmentCard.scss";
import { Link } from "react-router-dom";

class AssignmentCard extends Component {
  render() {
    return (
      <Link
        to={`/assignment/${this.props.info.id}`}
        id="AssignmentCard"
        className="text-dark"
        style={{ textDecoration: "none" }}
      >
        <div className="card border-0 rounded shadow my-4 assignmentCard">
          <div className="card-header d-flex align-items-center m-0 border-0 shadow-sm">
            <div className="card-title font-weight-bold p-0 m-0">
              {this.props.info.title || "-"}
            </div>
          </div>
          <div className="card-body">
            <div className="submissionData d-flex flex-xl-row flex-column mx-auto justify-content-between py-3">
              <p className="p-0 m-0 d-flex justify-content-between">
                <b className="mr-2">Posted on:</b>
                <span>
                  {(this.props.info.posted &&
                    this.props.info.posted.toLocaleString()) ||
                    "-"}
                </span>
              </p>
              <p className="p-0 m-0 d-flex justify-content-between">
                <b className="mr-2">Weightage:</b>
                <span>{this.props.info.weightage || "-"}</span>
              </p>
              <p className="p-0 m-0 d-flex justify-content-between">
                <b className="mr-2">Due date:</b>
                <span>
                  {(this.props.info.due &&
                    this.props.info.due.toLocaleString()) ||
                    "-"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default AssignmentCard;
