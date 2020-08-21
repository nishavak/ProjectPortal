import React, { Component } from "react";
import "./SubmissionStatus.scss";
import $ from "jquery";
import { Redirect } from "react-router-dom";
// import AssignmentListGIF from "../student/AssignmentList.gif";

class SubmissionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
  }
  detailInfo = () => {
    this.setState({ redirect: "/group-submission/:id" });
  };

  render() {
    // if (this.state.loading) return <Loading />;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <div id="AssignmentList" className="container pt-3">
          <ul className="nav nav-pills nav-justified nav-fill">
            <li
              className="nav-item nav-link active"
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                let { target } = event;
                $("#assignment-list").fadeOut("fast", () =>
                  this.setState({ category: "all" }, () => {
                    $(".nav-item.nav-link.active").removeClass("active");
                    $(target).addClass("active");
                    $("#assignment-list").fadeIn("fast");
                  })
                );
              }}
            >
              All
            </li>
            <li
              className="nav-item nav-link"
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                let { target } = event;
                $("#assignment-list").fadeOut("fast", () =>
                  this.setState({ category: "graded" }, () => {
                    $(".nav-item.nav-link.active").removeClass("active");
                    $(target).addClass("active");
                    $("#assignment-list").fadeIn("fast");
                  })
                );
              }}
            >
              Graded
            </li>
            <li
              className="nav-item nav-link"
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                let { target } = event;
                $("#assignment-list").fadeOut("fast", () =>
                  this.setState({ category: "ungraded" }, () => {
                    $(".nav-item.nav-link.active").removeClass("active");
                    $(target).addClass("active");
                    $("#assignment-list").fadeIn("fast");
                  })
                );
              }}
            >
              Ungraded
            </li>
            <li
              className="nav-item nav-link"
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                let { target } = event;
                $("#assignment-list").fadeOut("fast", () =>
                  this.setState({ category: "unsub" }, () => {
                    $(".nav-item.nav-link.active").removeClass("active");
                    $(target).addClass("active");
                    $("#assignment-list").fadeIn("fast");
                  })
                );
              }}
            >
              Not Submitted yet
            </li>
          </ul>
          <br />
          <div class="table-responsive-sm">
            <table class="ui striped table">
              <thead
                class="text-center"
                style={{ fontFamily: `'Courier New', Courier, monospace` }}
              >
                <tr class="">
                  <th class="" scope="col">
                    Group Number
                  </th>
                  <th class="" scope="col">
                    Submission Status
                  </th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="" onClick={this.detailInfo}>
                  <td class="">1</td>
                  <td class="">Not Submitted</td>
                </tr>
                <tr class="" onClick={this.detailInfo}>
                  <td class="">2</td>
                  <td class="">Graded</td>
                </tr>
                <tr class="" onClick={this.detailInfo}>
                  <td class="">3</td>
                  <td class="">Ungraded</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div
            className='bg'
            style={{
              backgroundImage: `url(${AssignmentListGIF})`,
              filter: "blur(0.16em)",
            }}
          /> */}
        </div>
      </div>
    );
  }
}

export default SubmissionStatus;
