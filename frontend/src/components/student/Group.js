import React, { Component } from "react";
import $ from "jquery";
import axios from "../../axios";

export default class Group extends Component {
  constructor(props) {
    super(props);

    this.leader = false;
    this.data = {};
  }

  componentDidMount() {
    axios
      .get("amILeader/")
      .then(({ data }) => {
        this.leader = data;
        this.setState({});
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("groupData/")
      .then(({ data }) => {
        this.data = data;
        this.setState({});
      })
      .catch((err) => {
        console.log(err);
      });
    $("#addStudent").on("shown.bs.modal", function () {
      $("#add_roll_number").focus();
    });
    $("#removeStudent").on("shown.bs.modal", function () {
      $("#remove_roll_number").focus();
    });
  }

  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center slide-in-fwd-center"
        style={{ minHeight: "100%" }}
      >
        <div className="">
          <b>Group Id</b>
          <p>{!$.isEmptyObject(this.data) && this.data.group_id}</p>
        </div>
        <div className="">
          <b>Group leader</b>
          <p>{!$.isEmptyObject(this.data) && this.data.leader_name}</p>
        </div>
        {this.leader && (
          <div className="py-2 d-flex flex-column">
            <a
              href="#addStudent"
              className="text-primary"
              data-toggle="modal"
              data-target="#addStudent"
            >
              Add member
            </a>
            <a
              href="#removeStudent"
              className="text-primary"
              data-toggle="modal"
              data-target="#removeStudent"
            >
              Remove member
            </a>
          </div>
        )}
        <div className="">
          <b>Members</b>
          {!$.isEmptyObject(this.data) &&
            this.data.members.map((member) => (
              <div
                className="studentCard w-75 my-2 rounded p-2"
                style={{
                  background: "linear-gradient(to right, #f8f9fa, #ffffff)",
                }}
              >
                <b className="d-block">{member.name}</b>
                <span className="d-block">{member.roll_number}</span>
                <span className="d-block">{member.branch}</span>
                <span className="d-block">{member.email}</span>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
