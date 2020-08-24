import React from "react";
import SomaiyaLogo from "../../assets/images/Somaiya.svg";
import UserImage from "../../assets/images/User.png";
import axios from "../../axios";
import "./Header.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
    this.image = null;
  }

  componentDidMount() {
    axios.get("getImage/").then(({ data }) => {
      this.image = data;
      this.setState({ loading: false });
    });
  }

  render() {
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
              onClick={() => this.props.history.push("/")}
            />
          </div>
          <div className="dropdown">
            <img
              src={this.state.loading ? UserImage : this.image}
              className="rounded-circle shadow-sm"
              alt="1814040"
              data-toggle="dropdown"
              style={{ cursor: "pointer", width: "3em", height: "3em" }}
            />
            <div className="dropdown-menu dropdown-menu-right border-0 shadow-sm">
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => this.props.history.push("/")}
              >
                Assignments
              </div>
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => this.props.history.push("/profile")}
              >
                Profile
              </div>
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  axios
                    .get("signOut/")
                    .then(() => window.location.reload())
                    .catch(() => window.location.reload())
                }
              >
                Sign out
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
