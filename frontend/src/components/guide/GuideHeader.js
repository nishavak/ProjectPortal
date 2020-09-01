import React, { Component } from "react";
import "./GuideHeader.scss";
import { Link } from "react-router-dom";
import SomaiyaLogo from "../../assets/images/Somaiya.svg";
import axios from "../../axios";
import Loading from "../shared/Loading";
import UserImage from "../../assets/images/User.png";

class GuideHeader extends Component {
  constructor(props) {
    super(props);
    this.image = null;
    this.state = {
      loading: true,
    };
    this.alloted_count = null;
  }

  componentDidMount() {
    axios
      .get("guideHeader/")
      .then(({ data }) => {
        this.alloted_count = data;
      })
      .catch((err) => {});
    axios.get("getImage/").then(({ data }) => {
      this.image = data;
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className='sticky-top'>
        <div id='guide-header' className='navbar bg-light shadow-sm noselect'>
          <Link to='/' className='navbar-brand'>
            <img src={SomaiyaLogo} style={{ height: "2em" }} alt='Home' />
          </Link>
          <div className='dropdown'>
            <img
              src={this.image || UserImage}
              className='rounded-circle dropdown-toggle shadow-sm'
              data-toggle='dropdown'
              alt={""}
              style={{ cursor: "pointer", width: "3em", height: "3em" }}
            />
            <div className='dropdown-menu py-2 dropdown-menu-right shadow-sm border-0'>
              <Link to='/dashboard'>
                <div className='dropdown-item'>
                  <i className='fa fa-folder fa-fw mr-2' />
                  Dashboard
                </div>
              </Link>

              <Link to='/profile/personal-section' className='dropdown-item'>
                <i className='fa fa-user fa-fw mr-2' />
                Profile
              </Link>

              <Link to='/guide-details' className='dropdown-item'>
                <i className='fa fa-wpforms fa-fw mr-2' />
                Details Form
              </Link>
              {this.alloted_count < 2 && (
                <Link to='/guide-request' className='dropdown-item'>
                  <i className='fa fa-bolt fa-fw mr-2' />
                  Guide Request
                </Link>
              )}
              <div
                className='dropdown-item'
                onClick={() =>
                  axios.get("signOut/").then(() => window.location.reload())
                }>
                <i className='fa fa-lock fa-fw mr-2' />
                Sign out
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuideHeader;
