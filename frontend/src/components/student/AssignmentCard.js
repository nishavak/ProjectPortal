import React from "react";

export default function AssignmentCard(props) {
  return (
    <div
      id="AssignmentCard"
      className="slide-in-bottom"
      onClick={() => props.history.push(`/assignment/${props.id}`)}
    >
      <div className="card shadow-sm my-4">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <div className="d-flex flex-xl-row flex-column">
            <div className="col d-flex justify-content-between m-0 p-0">
              <b>Posted on:</b>
              <div>{props.posted}</div>
            </div>
            <div className="col d-flex justify-content-between m-0 p-0 px-xl-5">
              <b>Weightage:</b>
              <div>{props.weightage || "-"}</div>
            </div>
            <div className="col d-flex justify-content-between m-0 p-0">
              <b>Due on:</b>
              <div>{props.due || "-"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
