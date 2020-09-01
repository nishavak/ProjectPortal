import React, { Component } from "react";
import GuideHeader from "./GuideHeader";
import GroupSection from "./GroupSection";
import PersonalSection from "./PersonalSection";
import ProjectSection from "./ProjectSection";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "../../axios";
import UserImage from "../../assets/images/User.png";
import Loading from "../shared/Loading";
import "./Profile.scss";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
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
        this.setState({ loading: false });
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
    if (this.state.loading) return <Loading />;
    return (
      <div className='profile'>
        <Route component={GuideHeader} />
        <div className='d-flex align-items-center rounded my-3 noselect'>
          <div
            className='col-11 row mx-auto p-0 rounded shadow'
            style={{ minHeight: "75vh" }}>
            <div className='col-md-3 sidebar col-sm-12  d-md-block rounded m-0 p-0'>
              <div
                id='Sidebar'
                className='bg-light m-0 p-0 text-center rounded-left h-100'>
                <div className='p-0 d-md-none '>
                  <i class='fa fa-bars' aria-hidden='true'></i>
                </div>
                <div className='profile-pic container-fluid p-3 pb-0 mb-0 d-md-block d-none'>
                  <img
                    src={this.image || UserImage}
                    className='w-100 h-100 mx-auto rounded-lg '
                    alt='user avatar'
                  />
                </div>

                <div
                  className='p-1 nav-options mt-2 d-md-block d-none'
                  style={{
                    color: "#dcdee0",
                    fontSize: "",
                    fontWeight: "450",
                  }}>
                  <div
                    className='link'
                    onClick={() => {
                      window.location.href = "/profile/personal-section/";
                    }}>
                    <div id='tab1' className='tab rounded p-2 '>
                      Personal
                    </div>
                  </div>

                  {this.team &&
                    this.team.map((team) => (
                      <div
                        onClick={() => {
                          window.location.href = `/profile/group-section/${team.team_id}`;
                        }}
                        className='link'>
                        <div id='tab2' className='tab rounded p-2 '>
                          Group ID: {team.team_id}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {/* on click in sidebar, this component should refresh */}
            </div>
            <div className='col-md-9 col-sm-12 m-0 p-3'>
              <Switch>
                <Route
                  path='/profile/personal-section'
                  component={PersonalSection}
                />
                <Route
                  path='/profile/group-section/:id/'
                  component={GroupSection}
                />
                <Route
                  path='/profile/project-section/:id/'
                  component={ProjectSection}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
