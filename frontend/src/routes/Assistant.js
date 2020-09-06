import $ from "jquery";
import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import SomaiyaLogo from "../assets/images/Somaiya.svg";
import axios from "../axios";
import AssignmentDetails from "../components/assistant/AssignmentDetails";
import AssignmentList from "../components/assistant/AssignmentList";
import "../components/assistant/Dashboard.scss";
import GradingStats from "../components/assistant/GradingStats";
import GroupDetails from "../components/assistant/GroupDetails";
import GroupList from "../components/assistant/GroupList";
import GroupSubmissionDetails from "../components/assistant/GroupSubmissionDetails";
import GuideDetailedList from "../components/assistant/GuideDetailedList";
import GuideDetails from "../components/assistant/GuideDetails";
import GuideList from "../components/assistant/GuideList";
import ProjectDetails from "../components/assistant/ProjectDetails";
import ProjectList from "../components/assistant/ProjectList";
import Statistics from "../components/assistant/Statistics";
import StudentDetails from "../components/assistant/StudentDetails";
import StudentList from "../components/assistant/StudentList";
import ChangePassword from "../components/shared/ChangePassword";

class Assistant extends React.Component {
  toggleSidebar = () => {
    $(".mobile-sidebar").toggleClass("d-none");
  };
  render() {
    return (
      <>
        <Route component={ChangePassword} />
        <div className="dashboard-admin min-vh-100 user-select-none ">
          <div className="mobile-header  d-lg-none d-flex p-1 align-items-center py-3 shadow-sm ">
            <div className="col-6 text-left">
              <img
                src={SomaiyaLogo}
                alt="Somaiya logo"
                className=""
                style={{ width: "11em" }}
              />
            </div>
            <div className="col-6 text-right">
              <i
                class="fa fa-fw fa-bars"
                aria-hidden="true"
                onClick={() => {
                  this.toggleSidebar();
                }}
              />
            </div>
          </div>
          <div className="mobile-sidebar col d-lg-none d-none bg-light px-0 text-left">
            <Link
              to="/students"
              className="text-decoration-none mobile-nav-item py-2 border-bottom"
            >
              <div
                onClick={() => {
                  this.toggleSidebar();
                }}
                className="nav-item p-2 w-100 "
              >
                <i className="fa fa-fw fa-user mr-3" aria-hidden="true" />
                Students
              </div>
            </Link>
            <Link
              to="/groups"
              className="text-decoration-none mobile-nav-item py-2 border-bottom"
            >
              <div
                onClick={() => {
                  this.toggleSidebar();
                }}
                className="nav-item p-2 w-100 "
              >
                <i className="fa fa-fw fa-users mr-3" aria-hidden="true" />
                Groups
              </div>
            </Link>
            <Link
              to="/guides"
              className="text-decoration-none mobile-nav-item py-2 border-bottom"
            >
              <div
                onClick={() => {
                  this.toggleSidebar();
                }}
                className="nav-item p-2 w-100 "
              >
                <i className="fa fa-fw fa-user mr-3" aria-hidden="true" />
                Guides
              </div>
            </Link>
            <Link
              to="/assignments"
              className="text-decoration-none mobile-nav-item py-2 border-bottom"
            >
              <div
                onClick={() => {
                  this.toggleSidebar();
                }}
                className="nav-item p-2 w-100 "
              >
                <i className="fa fa-fw fa-tasks mr-3" aria-hidden="true" />
                Assignments
              </div>
            </Link>
            <Link
              to="/projects"
              className="text-decoration-none mobile-nav-item py-2 border-bottom"
            >
              <div
                onClick={() => {
                  this.toggleSidebar();
                }}
                className="nav-item p-2 w-100 "
              >
                <i className="fa fa-fw fa-folder mr-3" aria-hidden="true" />
                Projects
              </div>
            </Link>

            <div
              className="mobile-nav-item p-2 w-100 text-decoration-none "
              style={{ cursor: "pointer" }}
              data-toggle="modal"
              data-target="#change-password"
            >
              <i className="fa fa-fw fa-key mr-3" aria-hidden="true" />
              Change Password
            </div>
            <div
              className="mobile-nav-item p-2 w-100 text-decoration-none "
              style={{ cursor: "pointer" }}
              onClick={() =>
                axios.get("signOut/").then(() => window.location.reload())
              }
            >
              <i className="fa fa-fw fa-sign-out mr-3" aria-hidden="true" />
              Sign out
            </div>
          </div>
          <div className="row mx-auto">
            <div className="sidebar col-lg-2 col-12  d-lg-block d-none shadow m-0">
              <div>
                <img
                  src={SomaiyaLogo}
                  alt="Somaiya logo"
                  className="mt-3 mb-4"
                  style={{ width: "9.5em" }}
                />
              </div>
              <div className="d-flex justify-content-center m-auto">
                <div className="nav align-top ">
                  <Link
                    to="/students"
                    className="nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-left  text-decoration-none "
                  >
                    <i className="fa fa-fw fa-user mr-3" aria-hidden="true" />
                    Student
                  </Link>
                  <Link
                    to="/groups"
                    className="nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-left  text-decoration-none "
                  >
                    <i className="fa fa-fw fa-users mr-3" aria-hidden="true" />
                    Groups
                  </Link>
                  <Link
                    to="/guides"
                    className="nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-left  text-decoration-none "
                  >
                    <i className="fa fa-fw fa-user mr-3" aria-hidden="true" />
                    Guide
                  </Link>
                  <Link
                    to="/assignments"
                    className="nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left"
                  >
                    <i className="fa fa-fw fa-tasks mr-3" aria-hidden="true" />
                    Assignments
                  </Link>
                  <Link
                    to="/projects"
                    className="nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left"
                  >
                    <i className="fa fa-fw fa-folder mr-3" aria-hidden="true" />
                    Projects
                  </Link>

                  <div
                    className="nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left"
                    style={{ cursor: "pointer" }}
                    data-toggle="modal"
                    data-target="#change-password"
                  >
                    <i className="fa fa-fw fa-key mr-3" aria-hidden="true" />
                    Change Password
                  </div>

                  <div
                    className="nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left"
                    onClick={() =>
                      axios.get("signOut/").then(() => window.location.reload())
                    }
                  >
                    <i
                      className="fa fa-fw fa-sign-out mr-3"
                      aria-hidden="true"
                    />
                    Sign out
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-2 p-0 mb-5">
              <Switch>
                <Route
                  path={["/signin", "/signup", "/forgot-password"]}
                  render={() => <Redirect to="/" />}
                />
                <Route exact path="/students" component={StudentList} />
                <Route exact path="/student/:id" component={StudentDetails} />
                <Route exact path="/guides" component={GuideList} />
                <Route
                  exact
                  path="/guide-detailed"
                  component={GuideDetailedList}
                />
                <Route exact path="/guide/:id" component={GuideDetails} />
                <Route exact path="/groups" component={GroupList} />
                <Route exact path="/group/:id" component={GroupDetails} />
                <Route exact path="/assignments" component={AssignmentList} />
                <Route
                  exact
                  path="/assignment/:id"
                  component={AssignmentDetails}
                />
                <Route
                  exact
                  path="/submission-statistics"
                  component={Statistics}
                />
                <Route
                  exact
                  path="/grade-statistics"
                  component={GradingStats}
                />
                <Route exact path="/projects" component={ProjectList} />
                <Route exact path="/project/:id" component={ProjectDetails} />

                <Route
                  exact
                  path="/group-submission/:assignment/:team"
                  component={GroupSubmissionDetails}
                />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Assistant;
