import React from "react";
import {Link} from "react-router-dom";

export default function AssignmentCard(props) {
  return (
    <div
      id="AssignmentCard"
      className="slide-in-bottom"
    >
      <Link
        to={`/assignment/${props.groupId}/${props.id}/`}
        className="text-dark"
        style={{ textDecoration: "none" , cursor: "pointer"}}
      >
      <div className="card shadow-sm my-4">
        <div className="card-header">Assignment Title</div>
        <div className="card-body">
          <div className="d-flex flex-xl-row flex-column">
            <div className="col d-flex justify-content-between m-0 p-0">
              <b>Posted on:</b>
              <div>{props.posted}</div>
            </div>
            <div className="col d-flex justify-content-between m-0 p-0 px-xl-5">
              <b>Weightage:</b>
              <div>{props.weightage}</div>
            </div>
            <div className="col d-flex justify-content-between m-0 p-0">
              <b>Due on:</b>
              <div>{props.due}</div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
