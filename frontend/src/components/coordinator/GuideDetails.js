import React from "react";
import "./GuideDetails.scss";
import { Link } from "react-router-dom";
import axios from "../../axios";

class GuideDetails extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.guide = {};
  }

  componentDidMount() {
    axios
      .get(`coordinatorGuideDetail/${this.id}/`)
      .then(({ data }) => {
        this.student = data;
        this.setState({});
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="guide-details mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Guide Details
        </div>
        <div className="d-flex flex-md-row flex-column my-3 py-3">
          <div className="col-md-6 left-panel">
            <div className="">
              <p className="text-muted">Name</p>
              <p className="font-weight-bold">
                {this.guide && this.guide.guide_name}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Department</p>
              <p className="font-weight-bold">
                {this.guide && this.guide.guide_branch}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Email ID</p>
              <p className="font-weight-bold">
                {this.guide && this.guide.guide_email}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Domains</p>

              <p className="font-weight-bold">
                {this.guide.preferences &&
                  this.guide.preferences.map((p) => {
                    return <span>{p.area_of_interest},</span>;
                  })}
              </p>
            </div>
            <hr />
          </div>
          <div className="col-md-6 right-panel">
            <ul className="list-group">
              <p className="text-muted">
                Group Numbers
                <span className="badge badge-info mx-1 p-1">
                  {this.guide.team_data && this.guide.team_data.length}
                </span>
              </p>
              {this.guide.team_data &&
                this.guide.team_data.map((team) => {
                  return (
                    <Link to={`/group/${team.team_id}`}>
                      <li className="list-group-item d-flex list-group-item-action my-2">
                        <div className="col-12 m-0 px-1">
                          <span>
                            Group Number : <b>{team.team_id}</b>
                          </span>
                        </div>
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
        <Link to="/guides">
          <div className="mx-auto p-2 back-button text-center my-5 rounded-lg">
            <i className="fa fa-arrow-left mr-2" aria-hidden="true" />
            Back to Guide List
          </div>
        </Link>
      </div>
    );
  }
}

export default GuideDetails;
