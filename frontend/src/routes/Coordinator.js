import React from "react";
import { Route, Switch } from "react-router-dom";
import AssignmentCreation from "../components/coordinator/AssignmentCreation";
import AssignmentDetails from "../components/coordinator/AssignmentDetails";
import AssignmentList from "../components/coordinator/AssignmentList";
import Dashboard from "../components/coordinator/Dashboard";
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

const Coordinator = () => {
  return (
    <Switch>
      <Route path={["/", "/dashboard"]} component={Dashboard} />
      <Route exact path="/users/students" component={StudentList} />
      <Route exact path="/users/guides" component={GuideList} />
      <Route exact path="/groups" component={GroupList} />
      <Route exact path="/group/:id" component={GroupDetails} />
      <Route exact path="/assignments" component={AssignmentList} />
      <Route exact path="/submission-statistcs" component={Statistics} />
      <Route exact path="/assignment/:id" component={AssignmentDetails} />
      <Route exact path="/projects" component={ProjectList} />
      <Route exact path="/project/:id" component={ProjectDetails} />
      <Route exact path="/users/guide/:id" component={GuideDetails} />
      <Route path="/users/guide-detailed" component={GuideDetailedList} />
      <Route exact path="/users/student/:id" component={StudentDetails} />
      <Route exact path="/create-assignments" component={AssignmentCreation} />
      <Route exact path="/handle-requests" component={HandleRequests} />
      <Route exact path="/faculty-form" component={FacultyForm} />
      <Route
        exact
        path="/group-submission/:id"
        component={GroupSubmissionDetails}
      />
      <Route exact path="/grade-statistcs" component={GradingStats} />
    </Switch>
  );
};

export default Coordinator;
