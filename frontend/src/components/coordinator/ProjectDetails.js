import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails.scss";
import axios from "../../axios";

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.project = {};
  }

  componentDidMount() {
    axios
      .get(`coordinatorProjectDetail/${this.id}/`)
      .then(({ data }) => {
        this.project = data;
        this.setState({});
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    return (
      <div className="project-details mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Project Details
        </div>
        <div className="d-flex flex-md-row flex-column my-3 py-3">
          <div className="col-md-6 left-panel   ">
            <div className="">
              <p className="text-muted">Project Name</p>
              <p className="font-weight-bold">
                {this.project && this.project.project_title}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Domain</p>
              <p className="font-weight-bold">
                {this.project && this.project.project_domain}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Type</p>
              <p className="font-weight-bold">
                {this.project && this.project.project_category}
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-muted">Description</p>
              <p className="">
                {this.project && this.project.project_description}
              </p>
            </div>
            {this.project.project_explanatory_field && (
              <div className="">
                <p className="text-muted">
                  Explanation for Interdisciplinary project
                </p>
                <p className="">
                  {this.project && this.project.project_explanatory_field}
                </p>
              </div>
            )}

            <hr />
          </div>
          <div className="col-md-6 right-panel  ">
            <ul className="list-group">
              <p className="text-muted">
                Guide
                {/*<span className="badge badge-info mx-1 p-1">2</span>*/}
              </p>
              <Link to={`/guide/${this.project.guide_id}`}>
                <li className="list-group-item d-flex list-group-item-action my-2">
                  <div className="col-12 m-0 px-1">
                    <span>
                      Guide Name :{" "}
                      <b>{this.project && this.project.guide_name}</b>
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
              <Link to={`/group/${this.project.team_id}`}>
                <li className="list-group-item d-flex list-group-item-action my-2">
                  <div className="col-12 m-0 px-1">
                    <span>
                      Group Number :{" "}
                      <b>{this.project && this.project.team_id}</b>
                    </span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/projects">
          <div className="mx-auto back-button p-2 text-center my-4 rounded-lg">
            <i className="fa fa-arrow-left mr-2" aria-hidden="true" />
            Back to Project List
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectDetails;
