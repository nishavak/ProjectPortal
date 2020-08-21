import React from "react";
import axios from "../../axios";
import "./StudentDetails.scss";
import { Link } from "react-router-dom";

class StudentDetails extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.student = {};
  }

  componentDidMount() {
    axios
      .get(`coordinatorStudentDetail/${this.id}/`)
      .then(({ data }) => {
        this.student = data;
        this.setState({});
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    return (
      <div className="student-details mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Student Details
        </div>
        <div className="d-flex flex-md-row flex-column my-3 py-3">
          <div className="col-md-6 left-panel ">
            <div className="">
              <p className="text-muted">Roll Number</p>
              <p className="font-weight-bold">
                {this.student && this.student.student_roll_number}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Name</p>
              <p className="font-weight-bold">
                {this.student && this.student.student_name}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Department</p>
              <p className="font-weight-bold">
                {this.student && this.student.student_branch}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Email ID</p>
              <p className="font-weight-bold">
                {this.student && this.student.student_email}
              </p>
            </div>
          </div>
          <div className="col-md-6 right-panel ">
            <ul className="list-group ">
              <div className="my-2">
                <p className="text-muted">Project</p>
                {this.student && this.student.project_id && (
                  <Link to={`/project/${this.student.project_id}`}>
                    <li className="list-group-item list-group-item-action">
                      <span>
                        Project Name :{" "}
                        <b>{this.student && this.student.project_name}</b>
                      </span>
                    </li>
                  </Link>
                )}
              </div>
            </ul>
            <hr />
            <ul className="list-group">
              <p className="text-muted">
                Guide
                {/*<span className="badge badge-info mx-1 p-1">2</span>*/}
              </p>
              {this.student && this.student.guide_id && (
                <Link to={`/guide/${this.student.guide_id}`}>
                  <li className="list-group-item d-flex list-group-item-action my-2">
                    <div className="col-12 m-0 px-1">
                      <span>
                        Guide Name :{" "}
                        <b>{this.student && this.student.guide_name}</b>
                      </span>
                    </div>
                  </li>
                </Link>
              )}
            </ul>
            <hr />
            <ul className="list-group">
              <p className="text-muted">
                Group
                {/*<span className="badge badge-info mx-1 p-1">2</span>*/}
              </p>
              {this.student && this.student.group_id && (
                <Link to={`/group/${this.student.group_id}`}>
                  <li className="list-group-item d-flex list-group-item-action my-2">
                    <div className="col-12 m-0 px-1">
                      <span>
                        Group Number : <b>{this.student.group_id}</b>
                      </span>
                    </div>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
        <Link to="/students">
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
