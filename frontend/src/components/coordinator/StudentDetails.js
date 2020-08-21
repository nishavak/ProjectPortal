import React from "react";
import "./StudentDetails.scss";
import { Link } from "react-router-dom";

class StudentDetails extends React.Component {
  render() {
    return (
      <div className="student-details mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)"
          }}
        >
          Student Details
        </div>
        <div className="d-flex flex-md-row flex-column my-3 py-3">
          <div className="col-md-6 left-panel ">
            <div className="">
              <p className="text-muted">Roll Number</p>
              <p className="font-weight-bold">1814055</p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Name</p>
              <p className="font-weight-bold">Jill Shah</p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Department</p>
              <p className="font-weight-bold">IT</p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Email ID</p>
              <p className="font-weight-bold">jill25@somaiya.edu</p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Is Leader?</p>
              <p className="font-weight-bold">True</p>
            </div>
            <hr />
          </div>
          <div className="col-md-6 right-panel ">
            <ul className="list-group ">
              <div className="my-2">
                <p className="text-muted">Project</p>
                <Link to="/project/:id">
                  <li className="list-group-item list-group-item-action">
                    <span>
                      Project Name : <b>Smart Cities Mission</b>
                    </span>
                  </li>
                </Link>
              </div>
            </ul>
            <hr />
            <ul className="list-group">
              <p className="text-muted">
                Guide
                {/*<span className="badge badge-info mx-1 p-1">2</span>*/}
              </p>
              <Link to="/users/guide/:id">
                <li className="list-group-item d-flex list-group-item-action my-2">
                  <div className="col-12 m-0 px-1">
                    <span>
                      Guide Name : <b>ABCD</b>
                    </span>
                  </div>
                </li>
              </Link>
            </ul>
            <hr />
            <ul className="list-group">
              <p className="text-muted">
                Group
                {/*<span className="badge badge-info mx-1 p-1">2</span>*/}
              </p>
              <Link to="/group/:id">
                <li className="list-group-item d-flex list-group-item-action my-2">
                  <div className="col-12 m-0 px-1">
                    <span>
                      Group Number : <b>1</b>
                    </span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/users/students">
          <div className="mx-auto p-2 back-button text-center my-4 rounded-lg">
            <i className="fa fa-arrow-left mr-2" aria-hidden="true" />
            Back to Student List
          </div>
        </Link>
      </div>
    );
  }
}

export default StudentDetails;
