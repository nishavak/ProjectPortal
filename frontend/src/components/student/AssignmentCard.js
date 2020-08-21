import React from "react";

export default function AssignmentCard(props) {
  return (
    <div
      id="AssignmentCard"
      className="slide-in-bottom"
      onClick={() => props.history.push(`/assignment/${props.id}`)}
    >
      <div className="card shadow-sm my-4">
        <div className="card-header">Assignment Title</div>
        <div className="card-body">
          <div className="d-flex flex-xl-row flex-column">
            <div className="col d-flex justify-content-between m-0 p-0">
              <b>Posted on:</b>
              <div>20/08/2020</div>
            </div>
            <div className="col d-flex justify-content-between m-0 p-0 px-xl-5">
              <b>Weightage:</b>
              <div>25</div>
            </div>
            <div className="col d-flex justify-content-between m-0 p-0">
              <b>Due on:</b>
              <div>20/08/2020</div>
            </div>
          </div>
        </div>
        {/* <div className="card-footer">Graded</div> */}
      </div>
    </div>
  );
}
