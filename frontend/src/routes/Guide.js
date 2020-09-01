import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GuideDashboard from "../components/guide/GuideDashboard";
import GuideDetailsForm from "../components/guide/GuideDetailsForm";
import GuideAssignmentList from "../components/guide/GuideAssignmentList";
import GuideAssignmentDetails from "../components/guide/GuideAssignmentDetails";
import PersonalSection from "../components/guide/PersonalSection";
import GroupSection from "../components/guide/GroupSection";
import ProjectSection from "../components/guide/ProjectSection";
import ChangePassword from "../components/shared/ChangePassword";
import GuideRequest from "../components/guide/GuideRequest";
import Profile from "../components/guide/Profile";
import ReqGroupDetails from "../components/guide/ReqGroupDetails";
import ReqProjectDetails from "../components/guide/ReqProjectDetails";

export default function Guide() {
  return (
    <div>
      <Route component={ChangePassword} />
      <Switch>
        <Route exact path={["/", "/dashboard"]} component={GuideDashboard} />
        <Route exact path='/guide-details' component={GuideDetailsForm} />
        <Route
          exact
          path='/assignment-list/:groupId/'
          component={GuideAssignmentList}
        />
        <Route
          exact
          path='/assignment/:groupId/:assignmentId/'
          component={GuideAssignmentDetails}
        />
        <Route exact path='/guide-request/' component={GuideRequest} />
        <Route path='/profile/' component={Profile} />
        <Route path='/profile/personal-section' component={PersonalSection} />
        <Route path='/profile/group-section/:id/' component={GroupSection} />
        <Route
          path='/profile/project-section/:id/'
          component={ProjectSection}
        />
        <Route path='/group/:id/' component={ReqGroupDetails} />
        <Route path='/project/:id/' component={ReqProjectDetails} />
      </Switch>
    </div>
  );
}
