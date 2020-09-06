import React from "react";
import { Link } from "react-router-dom";
import "./GroupDetails.scss";
import axios from "../../axios";
import Loading from "../shared/Loading";

class GroupDetails extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.team = {};
    this.state = { loading: true };
  }

  componentDidMount() {
    axios
      .get(`coordinatorGroupDetail/${this.id}`)
      .then(({ data }) => {
        this.team = data;
        this.setState({ loading: false });
      })
      .catch((err) => this.props.history.goBack());
  }
  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="group-details mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className=" p-2   text-center shadow-sm rounded font-weight-bold  mx-auto"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Group details
        </div>

        <div className="d-flex flex-md-row flex-column my-3 py-3">
          <div className="col-md-6 left-panel">
            <div className="">
              <p className="text-muted">Group Id</p>
              <p className="font-weight-bold">
                {this.team && this.team.team_id}
              </p>
            </div>
            <hr />
            {this.team.guide_data && this.team.guide_data.guide_id && (
              <>
                <ul className="list-group ">
                  <div className="my-2">
                    <p className="text-muted">Guide</p>
                    <Link
                      to={`/guide/${
                        this.team.guide_data && this.team.guide_data.guide_id
                      }`}
                    >
                      <li className="list-group-item align-items-center rounded d-flex list-group-item-action my-2">
                        <div className="col-2 m-0 p-0">
                          <img
                            src={
                              this.team.guide_data &&
                              this.team.guide_data.guide_photo
                            }
                            alt="profile_pic"
                            className="rounded-circle shadow-sm"
                            style={{ width: "3em", height: "3em" }}
                          />
                        </div>
                        <div className="col-10 m-0 px-1">
                          <span>
                            {this.team.guide_data &&
                              this.team.guide_data.guide_name}
                          </span>
                        </div>
                      </li>
                    </Link>
                  </div>
                </ul>
              </>
            )}
            {this.team.project_data && this.team.project_data.project_id && (
              <>
                <hr />
                <ul className="list-group">
                  <div className="my-2">
                    <p className="text-muted">Project</p>
                    <Link
                      to={`/project/${
                        this.team.project_data &&
                        this.team.project_data.project_id
                      }`}
                    >
                      <li className="list-group-item align-items-center rounded list-group-item-action">
                        <span>
                          {this.team.project_data &&
                            this.team.project_data.project_name}
                        </span>
                      </li>
                    </Link>
                  </div>
                </ul>
              </>
            )}
          </div>
          <div className="col-md-6 right-panel">
            <ul className="list-group">
              <p className="text-muted">
                Members
                <span className="badge badge-info mx-1 p-1">
                  {this.team.student_data && this.team.student_data.length}
                </span>
              </p>

              {this.team.student_data &&
                this.team.student_data.map((student) => {
                  return (
                    <Link to={`/student/${student.student_id}`}>
                      <li className="list-group-item align-items-center rounded d-flex list-group-item-action my-2">
                        <div className="col-3 m-0 p-0">
                          <img
                            src={student.student_photo}
                            alt="profile_pic"
                            className="rounded-circle shadow-sm"
                            style={{ width: "3em", height: "3em" }}
                          />
                        </div>
                        <div className="col-9 m-0 px-1">
                          <span>{student.student_name}</span>
                        </div>
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="w-100 d-flex justify-content-center">
          <div
            className="btn btn-danger"
            onClick={() => this.props.history.push("/groups")}
          >
            {/* <i className="fa fa-arrow-left mr-2" aria-hidden="true" /> */}
            Group List
          </div>
        </div>
      </div>
    );
  }
}

export default GroupDetails;
