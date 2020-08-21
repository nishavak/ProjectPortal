import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import SomaiyaLogo from "../assets/images/Somaiya.svg";

export default function Authentication() {
  return (
    <>
      <img
        src={SomaiyaLogo}
        alt="KJSCE"
        className="d-none d-xl-block"
        style={{
          position: "fixed",
          top: "0.2em",
          left: "1em",
          zIndex: "1",
          zoom: "70%",
          height: "10%",
          width: "10%",
        }}
      />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/signin" />
      </Switch>
    </>
  );
}
