import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import $ from "jquery";
import axios from "../../axios";
import UserImage from "../../assets/images/User.png";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTabId:
        JSON.parse(localStorage.getItem("sidebarCurrentTab")) || "#tab2",
    };
    this.team = [];
    this.image = null;
  }

  componentDidMount() {
    const that = this;
    console.log(this.state.currentTabId);
    $(this.state.currentTabId).addClass("current-tab");
    $(".tab").click(function () {
      $(".current-tab").removeClass("current-tab");
      let clickedTabId = "#" + $(this).attr("id");
      $(clickedTabId).addClass("current-tab");
      that.setState({ currentTabId: clickedTabId });
      localStorage.setItem("sidebarCurrentTab", JSON.stringify(clickedTabId));
    });
     axios
      .get(`guidePersonal/`)
      .then(({ data }) => {
        this.team = data.teams;
        this.setState({});
      })
      .catch((err) => this.props.history.goBack());

    axios.get("getImage/").then(({ data }) => {
      this.image = data;
      this.setState({});
    });
  }
  componentWillUnmount() {
    localStorage.setItem("sidebarCurrentTab", JSON.stringify("#tab1"));
  }

  render() {
    return (
      <div
        id="Sidebar"
        className="bg-light m-0 p-0 text-center rounded-left h-100"
      >
        <div
          className="p-0 d-md-none "
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="profile-pic container-fluid p-3 pb-0 mb-0 d-md-block d-none">
          <img
            src={this.image || UserImage}
            className="w-100 h-100 mx-auto rounded-lg "
            alt="user avatar"
          />
        </div>

        <div
          className="p-1 nav-options mt-2 d-md-block d-none"
          style={{
            color: "#dcdee0",
            fontSize: "",
            fontWeight: "450",
          }}
        >
          <Link
            to="/profile/personal-section"
            className="link"
          >
            <div id="tab1" className="tab rounded p-2">
              Personal
            </div>
          </Link>

          {this.team && this.team.map((team) => (
          <Link
            to={`/profile/group-section/${team.team_id}`}
            className="link"
          >
            <div id="tab2" className="tab rounded p-2 ">
              Group {team.team_id}
            </div>
          </Link>  
          ))}     
        </div>
      </div>
    );
  }
}
export default Sidebar;
