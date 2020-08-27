import React from "react";
import $ from "jquery";
import "./ProjectSection.scss";
import GuideHeader from "./GuideHeader";
import Sidebar from "./Sidebar";
import axios from "../../axios";
import { Route } from "react-router-dom";

class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.project_data = [];
    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    $("#submit-btn").attr("disabled", true);
    axios
      .get(`guideGroup/${this.id}/`)
      .then(({ data }) => {
        this.project_data = data.project;
        this.setState({});
      })
      .catch((err) => this.props.history.goBack());
  }
  
  render() {
    return (
      <>
        <Route component={GuideHeader}/>
        <div className='d-flex align-items-center rounded my-3 noselect'>
          <div
            className='col-11 row mx-auto p-0 rounded shadow'
            style={{ minHeight: "75vh" }}>
            <div className='col-md-3 col-sm-12 d-md-block rounded m-0 p-0'>
              <Route component={Sidebar}/>
            </div>
            <div className='col-md-9 col-sm-12 m-0 p-3'>
              <div className='' id='project-section'>
                <div id='project-registration-link'>
                  <div
                    className='bg-light font-weight-bold m-0 p-0 shadow-sm rounded'
                    style={{ color: "#5b9ecf", fontSize: "1.1em" }}>
                    <p className='p-2 text-center m-0'>Project Details</p>
                  </div>
                  <div
                  className="info-section p-3 mt-3  bg-light"
                  style={{ letterSpacing: "0.1em" }}
                  >
                  <div>
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "1.3em", fontWeight: "550" }}
                    >
                     Project Title
                    </p>
                    <p style={{ fontSize: "1.1em" }}>{this.project_data && this.project_data.project_title}</p>
                  </div>
                  <hr />
                  <div>
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "1.3em", fontWeight: "550" }}
                    >
                      Project Description
                    </p>
                    <p style={{ fontSize: "1.1em" }}>{this.project_data && this.project_data.project_description}</p>
                  </div>
                  <hr />
                  <div>
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "1.3em", fontWeight: "550" }}
                    >
                      Domain
                    </p>
                    <p style={{ fontSize: "1.1em" }}>{this.project_data && this.project_data.project_domain}</p>
                  </div>
                  <hr />
                  <div>
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "1.3em", fontWeight: "550" }}
                    >
                      Category
                    </p>
                    <p style={{ fontSize: "1.1em" }}>{this.project_data && this.project_data.project_category}</p>
                  </div>
                  {this.project_data && this.project_data.project_explanatory_field && 
                    <>
                  <hr />
                  <div>
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "1.3em", fontWeight: "550" }}
                    >
                      Explanatory Field
                    </p>
                    <p style={{ fontSize: "1.1em" }}>{this.project_data.project_explanatory_field}</p>
                  </div>
                  </>
                }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProjectSection;
