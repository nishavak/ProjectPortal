import React from "react";
import { Link } from "react-router-dom";
import "./GuideGroupCard.scss";

function GuideGroupCard(props) {
  return (
    <div
      id="group-card"
      className="col-md-5 col-12 m-4 p-0"
      style={{ wordBreak: "break-word" }}
    >
      <Link
        to={`/assignment-list/${props.groupId}/`}
        className="text-dark"
        style={{ textDecoration: "none" , cursor: "pointer"}}
      >
        <div className="card border-0 rounded shadow my-4 groupCard">
          <div id="card-header" className="card-header border-0 shadow-sm">
            <div className="card-subtitle">
              <span><b>Group Id :</b></span>
              <span><b>{props.groupId}</b></span>
            </div>
          </div>
          <div className="card-body">
            <div
              className="submissionData  mx-auto justify-content-between py-3 text-muted"
              style={{ fontSize: "0.9em" }}
            >
              <p className="p-0 m-0 d-flex justify-content-between ">
                <div className="col-sm-6 text-left p-0">
                  <span className="font-weight-bold">Group Leader:</span>
                </div>
                <div className="col-sm-6 p-0 text-right">
                  <span>{props.groupLeader}</span>
                </div>
              </p>
              <p className="p-0 m-0 d-flex justify-content-between">
                <div className="col-sm-6 text-left p-0">
                  <span className="font-weight-bold">Number of Members:</span>
                </div>
                <div className="col-sm-6 p-0 text-right">
                  <span>{props.numOfMembers}</span>
                </div>
              </p>
              <p className="p-0 m-0 d-flex justify-content-between">
                <div className="col-sm-6 text-left p-0">
                  <span className="font-weight-bold">Domain :</span>
                </div>
                <div className="col-sm-6 p-0 text-right">
                  <span>{props.domain}</span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GuideGroupCard;
