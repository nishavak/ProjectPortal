import $ from "jquery";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SomaiyaLogo from "../../assets/images/Somaiya.svg";
// import app from "../../Firebase";
import axios from "../../axios";
import AssignmentCreation from "./AssignmentCreation";
import AssignmentDetails from "./AssignmentDetails";
import AssignmentList from "./AssignmentList";
import "./Dashboard.scss";
import FacultyForm from "./FacultyForm";
import GradingStats from "./GradingStats";
import GroupDetails from "./GroupDetails";
import GroupList from "./GroupList";
import GroupSubmissionDetails from "./GroupSubmissionDetails";
import GuideDetailedList from "./GuideDetailedList";
import GuideDetails from "./GuideDetails";
import GuideList from "./GuideList";
import HandleRequests from "./HandleRequests";
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";
import Statistics from "./Statistics";
import StudentDetails from "./StudentDetails";
import StudentList from "./StudentList";

// import $ from "jquery";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*toggleDropdown = () => {
    $("#user").toggleClass("d-none");
  };*/
  toggleSidebar = () => {
    $(".mobile-sidebar").toggleClass("d-none");
  };
  render() {
    return (
      <div className="dashboard-admin min-vh-100 user-select-none ">
        <div className="mobile-header  d-lg-none d-flex p-1 align-items-center py-3 shadow-sm ">
          <div className="col-6 text-left">
            <img
              src={SomaiyaLogo}
              alt="Somaiya logo"
              className=""
              style={{ width: "11em" }}
              // style={{ zIndex: "1", top: "1em", left: "1em", height: "3em" }}
            />
          </div>
          <div className="col-6 text-right">
            <i
              class="fa fa-bars"
              aria-hidden="true"
              onClick={() => {
                this.toggleSidebar();
              }}
            />
          </div>
        </div>
        <div className="mobile-sidebar col d-md-none d-none bg-light px-0 text-left">
          <div
            className="mobile-nav-item py-2 border-bottom"
            onClick={() => {
              this.toggleSidebar();
            }}
          >
            <Link
              to="/users/students"
              className="nav-item rounded p-2 w-100 text-decoration-none "
              // onHover= {() =>{}}
            >
              <i className="fa fa-user mr-3" aria-hidden="true" />
              Student
            </Link>
          </div>
          <div
            className="mobile-nav-item py-2 border-bottom"
            onClick={() => {
              this.toggleSidebar();
            }}
          >
            <Link
              to="/groups"
              className="nav-item rounded p-2 w-100   text-decoration-none "
            >
              <i className="fa fa-users mr-3" aria-hidden="true" />
              Groups
            </Link>
          </div>
          <div
            className="mobile-nav-item py-2 border-bottom"
            onClick={() => {
              this.toggleSidebar();
            }}
          >
            <Link
              to="/users/guides"
              className="nav-item rounded p-2 w-100   text-decoration-none "
            >
              <i className="fa fa-user mr-3" aria-hidden="true" />
              Guide
            </Link>
          </div>
          <div
            className="mobile-nav-item py-2 border-bottom"
            onClick={() => {
              this.toggleSidebar();
            }}
          >
            <Link
              to="/assignments"
              className="nav-item rounded p-2 w-100 text-decoration-none "
            >
              <i className="fa fa-tasks mr-3" aria-hidden="true" />
              Assignments
            </Link>
          </div>

          <div
            className="mobile-nav-item py-2 border-bottom "
            onClick={() => {
              this.toggleSidebar();
            }}
          >
            <Link
              to="/projects"
              className="nav-item rounded p-2 w-100 text-decoration-none "
            >
              <i className="fa fa-folder mr-3" aria-hidden="true" />
              Projects
            </Link>
          </div>

          <div
            className="mobile-nav-item py-2 border-bottom"
            onClick={() => {
              this.toggleSidebar();
            }}
          >
            <Link
              to="/handle-requests"
              className="nav-item rounded p-2 w-100 text-decoration-none "
            >
              <i className="fa fa-bolt mr-3" aria-hidden="true" />
              Handle Requests
            </Link>
          </div>

          <div
            className="mobile-nav-item py-2 border-bottom"
            onClick={() => {
              this.toggleSidebar();
            }}
          >
            <Link
              to="/faculty-form"
              className="nav-item rounded p-2 w-100 text-decoration-none "
            >
              <i className="fa fa-wpforms mr-3" aria-hidden="true" />
              Faculty Form
            </Link>
          </div>

          <div
            className="mobile-nav-item rounded p-2 w-100 text-decoration-none "
            onClick={() => axios.get("signOut/")}
          >
            <i className="fa fa-sign-out mr-3" aria-hidden="true" />
            Sign out
          </div>
        </div>
        <div className="row mx-auto">
          <div className="sidebar col-lg-2 col-12  d-lg-block d-none shadow-sm m-0">
            <div>
              <img
                src={SomaiyaLogo}
                alt="Somaiya logo"
                className="mt-3 mb-4"
                style={{ width: "9.5em" }}
                // style={{ zIndex: "1", top: "1em", left: "1em", height: "3em" }}
              />
            </div>

            <div className="d-flex justify-content-center m-auto">
              <div className="nav align-top ">
                <Link
                  to="/users/students"
                  className="nav-item rounded p-2 w-100 text-left  text-decoration-none "
                >
                  <i className="fa fa-user mr-3" aria-hidden="true" />
                  Student
                </Link>
                <Link
                  to="/groups"
                  className="nav-item rounded p-2 w-100 text-left  text-decoration-none "
                >
                  <i className="fa fa-users mr-3" aria-hidden="true" />
                  Groups
                </Link>
                <Link
                  to="/users/guides"
                  className="nav-item rounded p-2 w-100 text-left  text-decoration-none "
                >
                  <i className="fa fa-user mr-3" aria-hidden="true" />
                  Guide
                </Link>
                <Link
                  to="/assignments"
                  className="nav-item rounded p-2 w-100 text-decoration-none text-left"
                >
                  <i className="fa fa-tasks mr-3" aria-hidden="true" />
                  Assignments
                </Link>
                <Link
                  to="/projects"
                  className="nav-item rounded p-2 w-100 text-decoration-none text-left"
                >
                  <i className="fa fa-folder mr-3" aria-hidden="true" />
                  Projects
                </Link>
                <Link
                  to="/handle-requests"
                  className="nav-item rounded p-2 w-100 text-decoration-none text-left"
                >
                  <i className="fa fa-bolt mr-3" aria-hidden="true" />
                  Handle Requests
                </Link>
                <Link
                  to="/faculty-form"
                  className="nav-item rounded p-2 w-100 text-decoration-none text-left"
                >
                  <i className="fa fa-wpforms mr-3" aria-hidden="true" />
                  Faculty Form
                </Link>
                <div
                  className="nav-item rounded p-2 w-100 text-decoration-none text-left"
                  onClick={() => axios.get("signOut/")}
                >
                  <i className="fa fa-sign-out mr-3" aria-hidden="true" />
                  Sign out
                </div>
              </div>
            </div>
          </div>
          {/*<span className='col-1'> </span>*/}
          <div
            className="col-lg-10 offset-lg-2 p-0"
            // style={{ position: "absolute" }}
          >
            <Route path="/users/students" component={StudentList} />
            <Route path="/users/guides" component={GuideList} />
            <Route path="/users/guide-detailed" component={GuideDetailedList} />
            <Route path="/groups" component={GroupList} />
            <Route exact path="/group/:id" component={GroupDetails} />
            <Route exact path="/assignments" component={AssignmentList} />
            <Route exact path="/submission-statistics" component={Statistics} />
            <Route path="/create-assignments" component={AssignmentCreation} />
            <Route path="/projects" component={ProjectList} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route exact path="/users/student/:id" component={StudentDetails} />
            <Route exact path="/users/guide/:id" component={GuideDetails} />
            <Route exact path="/handle-requests" component={HandleRequests} />
            <Route exact path="/assignment/:id" component={AssignmentDetails} />
            <Route
              exact
              path="/group-submission/:id"
              component={GroupSubmissionDetails}
            />
            <Route exact path="/grade-statistics" component={GradingStats} />

            <Route exact path="/faculty-form" component={FacultyForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
