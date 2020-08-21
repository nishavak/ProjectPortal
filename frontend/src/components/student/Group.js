import React, { Component } from "react";
import $ from "jquery";

export default class Group extends Component {
  constructor(props) {
    super(props);

    this.leader = true;
  }

  componentDidMount() {
    $("#addStudent").on("shown.bs.modal", function () {
      $("#roll_number").focus();
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
          <p>12</p>
        </div>
        <div className="">
          <b>Group leader</b>
          <p>Nishavak Santosh Naik</p>
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
          <div
            className="studentCard w-75 my-2 rounded p-2"
            style={{
              background: "linear-gradient(to right, #f8f9fa, #ffffff)",
            }}
          >
            <b className="d-block">Nishavak Santosh Naik</b>
            <span className="d-block">1814040</span>
            <span className="d-block">Information Technology</span>
            <span className="d-block">nishavak.n@somaiya.edu</span>
          </div>
          <div
            className="studentCard w-75 my-2 rounded p-2"
            style={{
              background: "linear-gradient(to right, #f8f9fa, #ffffff)",
            }}
          >
            <b className="d-block">Atharva Kitkaru</b>
            <span className="d-block">1814033</span>
            <span className="d-block">Information Technology</span>
            <span className="d-block">atharva.kitkaru@somaiya.edu</span>
          </div>
          <div
            className="studentCard w-75 my-2 rounded p-2"
            style={{
              background: "linear-gradient(to right, #f8f9fa, #ffffff)",
            }}
          >
            <b className="d-block">Jill Shah</b>
            <span className="d-block">1814055</span>
            <span className="d-block">Information Technology</span>
            <span className="d-block">jill25@somaiya.edu</span>
          </div>
        </div>
      </div>
    );
  }
}
