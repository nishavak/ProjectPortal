import React from "react";
import SomaiyaLogo from "../../assets/images/Somaiya.svg";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="slide-in-top">
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <img src={SomaiyaLogo} alt="Loading" className="heartbeat" />
        </div>
      </div>
    );
  }
}
