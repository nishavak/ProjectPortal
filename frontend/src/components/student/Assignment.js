import React, { Component } from "react";
import Uploader from "./Uploader";
import Loading from "../shared/Loading";
import $ from "jquery";
import axios from "../../axios";
import { Route } from "react-router-dom";

export default class Assignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.assignment = {};
  }

  componentDidMount() {
    axios
      .get(`assignment/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.assignment = data;
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.props.history.goBack();
      });
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div>
        <div className="col-12 col-md-11 mx-auto slide-in-bottom ">
          <div className="d-flex flex-column flex-md-row my-4">
            <div
              className="col-12 col-md-7 bg-light rounded-lg shadow p-md-4"
              style={{
                background: "linear-gradient(to right, #f8f9fa, #ffffff)",
              }}
            >
              <p className="text-justify" style={{ fontWeight: "800" }}>
                {!$.isEmptyObject(this.assignment) && this.assignment.title}
              </p>
              <hr />
              <div className="">
                <div className="d-flex justify-content-between">
                  <p className="m-0">Posted on:</p>
                  <p className="m-0">
                    {!$.isEmptyObject(this.assignment) &&
                      this.assignment.posted}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="m-0">Weightage:</p>
                  <p className="m-0">
                    {(!$.isEmptyObject(this.assignment) &&
                      this.assignment.weightage) ||
                      "-"}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="m-0">Due on:</p>
                  <p className="m-0">
                    {(!$.isEmptyObject(this.assignment) &&
                      this.assignment.due) ||
                      "-"}
                  </p>
                </div>
              </div>
              <hr />
              <div className="text-justify">
                {(!$.isEmptyObject(this.assignment) &&
                  this.assignment.description) ||
                  "No description provided."}
              </div>
              <hr />
              <div className="">
                <ul className="list-group">
                  {!$.isEmptyObject(this.assignment) &&
                  !this.assignment.attachments.length
                    ? "No attachments"
                    : this.assignment.attachments.map((attachment) => (
                        <li
                          className="attachment text-primary list-group-item border-0"
                          style={{ cursor: "pointer" }}
                          key={attachment.id}
                          onClick={() =>
                            // (window.location.href = `${attachment.url}`)
                            window.open(attachment.url, "_blank")
                          }
                        >
                          {attachment.name}
                        </li>
                      ))}
                </ul>
              </div>
            </div>
            <div
              className="col-12 col-md-4 offset-md-1 bg-white rounded-lg shadow my-4 my-xl-0"
              style={{
                minHeight: "75vh",
              }}
            >
              <Route component={Uploader} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
