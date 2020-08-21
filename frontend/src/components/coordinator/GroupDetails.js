import React from "react";
import { Link } from "react-router-dom";
import "./GroupDetails.scss";
class GroupDetails extends React.Component {
  render() {
    return (
      <div className="group-details mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className=" p-2   text-center shadow-sm rounded font-weight-bold  mx-auto"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)"
          }}
        >
          Group details
        </div>

        <div className="d-flex flex-md-row flex-column my-3 py-3">
          <div className="col-md-6 left-panel">
            <div className="">
              <p className="text-muted">Group Id</p>
              <p className="font-weight-bold">2</p>
            </div>
            <hr />
            <ul className="list-group ">
              <div className="my-2">
                <p className="text-muted">Guide</p>
                <Link to="/users/guide/:id">
                  <li className="list-group-item d-flex list-group-item-action my-2">
                    <div className="col-2 m-0 p-0">
                      <img src="../../media/User.png" alt="profile_pic" />
                    </div>
                    <div className="col-10 m-0 px-1">
                      <span>Guide Name </span>
                    </div>
                  </li>
                </Link>
              </div>
              <hr />

              <div className="my-2">
                <p className="text-muted">Project</p>
                <Link to="/project/:id">
                  <li className="list-group-item list-group-item-action">
                    <span>Project Name </span>
                  </li>
                </Link>
              </div>
            </ul>
          </div>
          <div className="col-md-6 right-panel">
            <ul className="list-group">
              <p className="text-muted">
                Members
                <span className="badge badge-info mx-1 p-1">3</span>
              </p>
              <Link to="/users/student/:id">
                <li className="list-group-item d-flex list-group-item-action my-2">
                  <div className="col-3 m-0 p-0">
                    <img src="../../media/User.png" alt="profile_pic" />
                  </div>
                  <div className="col-9 m-0 px-1">
                    <span>Student Name: Jill Shah </span>
                  </div>
                </li>
              </Link>
              <Link to="/users/student/:id">
                <li className="list-group-item d-flex list-group-item-action my-2">
                  <div className="col-3 m-0 p-0">
                    <img src="../../media/User.png" alt="profile_pic" />
                  </div>
                  <div className="col-9 m-0 px-1">
                    <span>Student Name: Nina G. </span>
                  </div>
                </li>
              </Link>
              <Link to="/users/student/:id">
                <li className="list-group-item d-flex list-group-item-action my-2">
                  <div className="col-3 m-0 p-0">
                    <img src="../../media/User.png" alt="profile_pic" />
                  </div>
                  <div className="col-9 m-0 px-1">
                    <span>Student Name: ABCD</span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/groups">
          <div className="mx-auto back-button p-2 text-center my-5 rounded-lg">
            <i className="fa fa-arrow-left mr-2" aria-hidden="true" />
            Back to Group List
          </div>
        </Link>
      </div>
    );
  }
}

export default GroupDetails;
