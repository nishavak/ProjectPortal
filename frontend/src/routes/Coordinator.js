import $ from "jquery";
import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import SomaiyaLogo from "../assets/images/Somaiya.svg";
import axios from "../axios";
import AssignmentCreation from "../components/coordinator/AssignmentCreation";
import AssignmentDetails from "../components/coordinator/AssignmentDetails";
import AssignmentList from "../components/coordinator/AssignmentList";
import "../components/coordinator/Dashboard.scss";
import FacultyForm from "../components/coordinator/FacultyForm";
import GradingStats from "../components/coordinator/GradingStats";
import GroupDetails from "../components/coordinator/GroupDetails";
import GroupList from "../components/coordinator/GroupList";
import GroupSubmissionDetails from "../components/coordinator/GroupSubmissionDetails";
import GuideDetailedList from "../components/coordinator/GuideDetailedList";
import GuideDetails from "../components/coordinator/GuideDetails";
import GuideList from "../components/coordinator/GuideList";
import HandleRequests from "../components/coordinator/HandleRequests";
import ProjectDetails from "../components/coordinator/ProjectDetails";
import ProjectList from "../components/coordinator/ProjectList";
import Statistics from "../components/coordinator/Statistics";
import StudentDetails from "../components/coordinator/StudentDetails";
import StudentList from "../components/coordinator/StudentList";

class Coordinator extends React.Component {
  toggleSidebar = () => {
    $(".mobile-sidebar").toggleClass("d-none");
  };
  render() {
    return (
      <div className='dashboard-admin min-vh-100 user-select-none '>
        <div className='mobile-header  d-lg-none d-flex p-1 align-items-center py-3 shadow-sm '>
          <div className='col-6 text-left'>
            <img
              src={SomaiyaLogo}
              alt='Somaiya logo'
              className=''
              style={{ width: "11em" }}
            />
          </div>
          <div className='col-6 text-right'>
            <i
              class='fa fa-fw fa-bars'
              aria-hidden='true'
              onClick={() => {
                this.toggleSidebar();
              }}
            />
          </div>
        </div>
        <div className='mobile-sidebar col d-md-none d-none bg-light px-0 text-left'>
          <Link
            to='/students'
            className='text-decoration-none mobile-nav-item py-2 border-bottom'>
            <div
              onClick={() => {
                this.toggleSidebar();
              }}
              className='nav-item p-2 w-100 '>
              <i className='fa fa-fw fa-user mr-3' aria-hidden='true' />
              Student
            </div>
          </Link>
          <div
            className='mobile-nav-item py-2 border-bottom'
            onClick={() => {
              this.toggleSidebar();
            }}>
            <Link
              to='/groups'
              className='nav-item rounded p-2 w-100   text-decoration-none '>
              <i className='fa fa-fw fa-users mr-3' aria-hidden='true' />
              Groups
            </Link>
          </div>
          <div
            className='mobile-nav-item py-2 border-bottom'
            onClick={() => {
              this.toggleSidebar();
            }}>
            <Link
              to='/guides'
              className='nav-item rounded p-2 w-100   text-decoration-none '>
              <i className='fa fa-fw fa-user mr-3' aria-hidden='true' />
              Guide
            </Link>
          </div>
          <div
            className='mobile-nav-item py-2 border-bottom'
            onClick={() => {
              this.toggleSidebar();
            }}>
            <Link
              to='/assignments'
              className='nav-item rounded p-2 w-100 text-decoration-none '>
              <i className='fa fa-fw fa-tasks mr-3' aria-hidden='true' />
              Assignments
            </Link>
          </div>
          <div
            className='mobile-nav-item py-2 border-bottom '
            onClick={() => {
              this.toggleSidebar();
            }}>
            <Link
              to='/projects'
              className='nav-item rounded p-2 w-100 text-decoration-none '>
              <i className='fa fa-fw fa-folder mr-3' aria-hidden='true' />
              Projects
            </Link>
          </div>
          <div
            className='mobile-nav-item py-2 border-bottom'
            onClick={() => {
              this.toggleSidebar();
            }}>
            <Link
              to='/handle-requests'
              className='nav-item rounded p-2 w-100 text-decoration-none '>
              <i className='fa fa-fw fa-bolt mr-3' aria-hidden='true' />
              Handle Requests
            </Link>
          </div>
          <div
            className='mobile-nav-item py-2 border-bottom'
            onClick={() => {
              this.toggleSidebar();
            }}>
            <Link
              to='/faculty-form'
              className='nav-item rounded p-2 w-100 text-decoration-none '>
              <i className='fa fa-fw fa-wpforms mr-3' aria-hidden='true' />
              Guide Creation
            </Link>
          </div>
          <div
            className='mobile-nav-item rounded p-2 w-100 text-decoration-none '
            onClick={() =>
              axios.get("signOut/").then(() => window.location.reload())
            }>
            <i className='fa fa-fw fa-sign-out mr-3' aria-hidden='true' />
            Sign out
          </div>
        </div>
        <div className='row mx-auto'>
          <div className='sidebar col-lg-2 col-12  d-lg-block d-none shadow m-0'>
            <div>
              <img
                src={SomaiyaLogo}
                alt='Somaiya logo'
                className='mt-3 mb-4'
                style={{ width: "9.5em" }}
              />
            </div>
            <div className='d-flex justify-content-center m-auto'>
              <div className='nav align-top '>
                <Link
                  to='/students'
                  className='nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-left  text-decoration-none '>
                  <i className='fa fa-fw fa-user mr-3' aria-hidden='true' />
                  Student
                </Link>
                <Link
                  to='/groups'
                  className='nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-left  text-decoration-none '>
                  <i className='fa fa-fw fa-users mr-3' aria-hidden='true' />
                  Groups
                </Link>
                <Link
                  to='/guides'
                  className='nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-left  text-decoration-none '>
                  <i className='fa fa-fw fa-user mr-3' aria-hidden='true' />
                  Guide
                </Link>
                <Link
                  to='/assignments'
                  className='nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left'>
                  <i className='fa fa-fw fa-tasks mr-3' aria-hidden='true' />
                  Assignments
                </Link>
                <Link
                  to='/projects'
                  className='nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left'>
                  <i className='fa fa-fw fa-folder mr-3' aria-hidden='true' />
                  Projects
                </Link>
                <Link
                  to='/handle-requests'
                  className='nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left'>
                  <i className='fa fa-fw fa-bolt mr-3' aria-hidden='true' />
                  Handle Requests
                </Link>
                <Link
                  to='/faculty-form'
                  className='nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left'>
                  <i className='fa fa-fw fa-wpforms mr-3' aria-hidden='true' />
                  Guide Creation
                </Link>
                <div
                  className='nav-item coordinator-sidebar-nav-item rounded p-2 w-100 text-decoration-none text-left'
                  onClick={() =>
                    axios.get("signOut/").then(() => window.location.reload())
                  }>
                  <i className='fa fa-fw fa-sign-out mr-3' aria-hidden='true' />
                  Sign out
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-10 offset-lg-2 p-0 mb-5'>
            <Switch>
              <Route
                path={["/signin", "/signup", "/forgot-password"]}
                render={() => <Redirect to='/' />}
              />
              <Route exact path='/students' component={StudentList} />
              <Route exact path='/student/:id' component={StudentDetails} />
              <Route exact path='/guides' component={GuideList} />
              <Route
                exact
                path='/guide-detailed'
                component={GuideDetailedList}
              />
              <Route exact path='/guide/:id' component={GuideDetails} />
              <Route exact path='/groups' component={GroupList} />
              <Route exact path='/group/:id' component={GroupDetails} />
              <Route exact path='/assignments' component={AssignmentList} />
              <Route
                exact
                path='/assignment/:id'
                component={AssignmentDetails}
              />
              <Route
                exact
                path='/submission-statistics'
                component={Statistics}
              />
              <Route exact path='/grade-statistics' component={GradingStats} />
              <Route exact path='/projects' component={ProjectList} />
              <Route exact path='/project/:id' component={ProjectDetails} />
              <Route
                exact
                path='/create-assignments'
                component={AssignmentCreation}
              />
              <Route exact path='/handle-requests' component={HandleRequests} />
              <Route exact path='/faculty-form' component={FacultyForm} />
              <Route
                exact
                path='/group-submission/:assignment/:team'
                component={GroupSubmissionDetails}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default Coordinator;
