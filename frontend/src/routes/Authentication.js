import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SomaiyaLogo from "../assets/images/Somaiya.svg";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";

export default function Authentication() {
  return (
    <>
      <img
        src={SomaiyaLogo}
        alt="KJSCE"
        className="d-none d-xl-block"
        style={{
          position: "fixed",
          top: "1em",
          left: "1em",
          zIndex: "1",
          zoom: "70%",
          height: "3em",
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
