import React from "react";
import { NotificationManager } from "react-notifications";
import { Route, Link } from "react-router-dom";
import GuideHeader from "./GuideHeader";
import axios from "../../axios";
import Loading from "../shared/Loading";

export default class GuideRequest extends React.Component {
  constructor(props) {
    super(props);
    this.requests = [];
    this.state = {
      status: "",
      loading: true,
    };
  }
  componentDidMount() {
    axios
      .get("guideRequest/")
      .then(({ data }) => {
        this.requests = data;
        console.log(this.requests);
        this.setState({ loading: false });
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <>
        <Route component={GuideHeader} />
        <div className="guide-requests mx-auto" style={{ width: "90%" }}>
          <br />
          <div
            className="p-2 text-center shadow-sm rounded font-weight-bold  mx-auto"
            style={{
              color: "rgb(183, 32, 46)",
              fontSize: "1.1em",
              backgroundColor: "rgba(231, 231, 231, 0.459)",
            }}
          >
            Approval Requests
          </div>
          <br />
          {this.requests.length
            ? this.requests.map((request) => (
                <div id="card" className="border-0 slide-in-bottom">
                  <div className="card border-0 shadow my-4">
                    <div className="card-header border-0">
                      <b>Group Id :</b> {request.team}
                    </div>
                    <div className="card-body border-0">
                      <div className="d-flex flex-md-row flex-column justify-content-between py-1">
                        <div className="col d-flex m-0 p-0">
                          <b className="pr-2">Sent on: </b>
                          <span>{request.timestamp_requested}</span>
                        </div>
                        <div className="col d-flex justify-content-center m-0 p-0">
                          <Link to={`/group/${request.team}`}>
                            <div className="text-primary text-center">
                              View Group Details
                            </div>
                          </Link>
                        </div>
                        <div className="col d-flex m-0 p-0 justify-content-end">
                          {/* <div className="d-flex flex-md-row flex-column  justify-content-end"> */}
                          <button
                            type="button"
                            class="btn btn-outline-success mr-2"
                            onClick={() => {
                              let res = window.confirm("Confirm accept");
                              if (res) {
                                axios
                                  .post("acceptRequest/", {
                                    team_id: request.team,
                                  })
                                  .then(({ data }) => {
                                    NotificationManager.success(data);
                                    this.setState(
                                      { ...this.state },
                                      this.componentDidMount()
                                    );
                                  })
                                  .catch((err) => {
                                    NotificationManager.error(
                                      err.response.data
                                    );
                                    this.setState(
                                      { ...this.state },
                                      this.componentDidMount()
                                    );
                                  });
                              }
                            }}
                          >
                            Accept
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-danger"
                            onClick={() => {
                              let res = window.confirm("Confirm reject");
                              if (res) {
                                axios
                                  .post("rejectRequest/", {
                                    team_id: request.team,
                                  })
                                  .then(({ data }) => {
                                    NotificationManager.error(data);
                                    this.setState(
                                      { ...this.state },
                                      this.componentDidMount()
                                    );
                                  })
                                  .catch((err) => {
                                    NotificationManager.error(
                                      err.response.data
                                    );
                                    this.setState(
                                      { ...this.state },
                                      this.componentDidMount()
                                    );
                                  });
                              }
                            }}
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "No requests"}
        </div>
      </>
    );
  }
}
