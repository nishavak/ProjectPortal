import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import ReactDOM from "react-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import "./assets/fonts/FiraCode.css";
import "./assets/fonts/Inter.css";
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Scrollbars style={{ minHeight: "100vh" }} autoHide>
      <Route component={App} />
      <NotificationContainer />
    </Scrollbars>
  </BrowserRouter>,
  document.getElementById("root")
);
