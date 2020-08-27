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

export default function Guide() {
  return (
    <div>
      <Route component={ChangePassword} />
      <Switch>
        <Route exact path={["/", "/dashboard"]} component={GuideDashboard} />
        <Route exact path="/guide-details" component={GuideDetailsForm} />
        <Route
          exact
          path="/assignment-list/:groupId/"
          component={GuideAssignmentList}
        />
        <Route
          exact
          path="/assignment/:groupId/:assignmentId/"
          component={GuideAssignmentDetails}
        />
        <Route exact path="/guide-request/" component={GuideRequest} />
        <Route
          exact
          path="/profile/personal-section"
          component={PersonalSection}
        />
        <Route
          exact
          path="/profile/group-section/:id/"
          component={GroupSection}
        />
        <Route
          exact
          path="/profile/project-section/:id/"
          component={ProjectSection}
        />
      </Switch>
    </div>
  );
}
