import React from "react";
import { Route } from "react-router-dom";
import GuideHeader from "./GuideHeader";

export default class GuideRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="guide-requests">
        <Route component={GuideHeader} />
        <br />
        <div className="mx-auto" style={{ width: "90%" }}>
          <div
            className="p-2 text-center shadow-sm rounded font-weight-bold  mx-auto"
            style={{
              color: "rgb(183, 32, 46)",
              fontSize: "1.1em",
              width: "80%",
              backgroundColor: "rgba(231, 231, 231, 0.459)",
            }}
          >
            Guide Approval Requests
          </div>
          <br />
          <div className=""></div>
        </div>
      </div>
    );
  }
}
