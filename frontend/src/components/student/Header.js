import React from "react";
import SomaiyaLogo from "../../assets/images/Somaiya.svg";
import UserImage from "../../assets/images/User.png";
import "./Header.scss";

export default function Header(props) {
  return (
    <header className="sticky-top-">
      <div className="navbar shadow-sm">
        <div className="navbar-brand">
          <img
            src={SomaiyaLogo}
            alt="KJSCE"
            style={{
              height: "2em",
              cursor: "pointer",
            }}
            onClick={() => props.history.push("/")}
          />
        </div>
        <div className="dropdown">
          <img
            src={UserImage}
            className="rounded-circle"
            alt="1814040"
            data-toggle="dropdown"
            style={{ cursor: "pointer", width: "3em", height: "3em" }}
          />
          <div className="dropdown-menu dropdown-menu-right border-0 shadow-sm">
            <div
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={() => props.history.push("/")}
            >
              Assignments
            </div>
            <div
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={() => props.history.push("/profile")}
            >
              Profile
            </div>
            <div
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={() => alert("Signed out")}
            >
              Sign out
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
