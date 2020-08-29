import React, { Component } from "react";
import axios from "../../axios";
import Loading from "../shared/Loading";
import { NotificationManager } from "react-notifications";

export default class Guide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      query: "",
    };
    this.data = [];
    this.leader = false;
    this.guide_data = null;
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  searchGuide = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    if (this.state.query)
      axios
        .get(`searchGuide/${this.state.query}`)
        .then(({ data }) => {
          console.table(data);
          this.data = data;
          this.setState({ loading: false });
        })
        .catch((err) => {
          this.setState({ loading: false });
        });
    else this.setState({ loading: false });
  };

  sendRequest = (id) => {
    axios
      .post("requestGuide/", { id: id })
      .then(({ data }) => {
        NotificationManager.success(data);
        this.setState({ ...this.state }, this.componentDidMount());
      })
      .catch((err) => {
        NotificationManager.error(err.response.data);
        this.setState({ ...this.state }, this.componentDidMount());
      });
  };

  componentDidMount() {
    axios
      .get("guideAssigned/")
      .then(({ data }) => {
        this.guide_data = data;
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
    axios
      .get("amILeader/")
      .then(({ data }) => {
        this.leader = data;
        this.setState({ ...this.state });
      })
      .catch((err) => {});
  }

  cancelRequest = (id) => {
    axios
      .post("cancelRequest/", { id })
      .then(({ data }) => {
        NotificationManager.success(data);
        this.setState({ ...this.state }, this.componentDidMount());
      })
      .catch((err) => {
        NotificationManager.error(err.response.data);
        this.setState({ ...this.state }, this.componentDidMount());
      });
  };

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div
        className="d-flex flex-column justify-content-center slide-in-fwd-center"
        style={{ minHeight: "100%" }}
      >
        {this.guide_data && (
          <div className="">
            <b>Guide</b>
            <div
              className="studentCard w-75 my-2 rounded p-2"
              style={{
                background: "linear-gradient(to right, #f8f9fa, #ffffff)",
              }}
            >
              <b className="d-block">{this.guide_data.name}</b>
              <span className="d-block">{this.guide_data.branch}</span>
              <span className="d-block">{this.guide_data.email}</span>
              {!this.guide_data.approved && (
                <>
                  <button
                    className="btn text-primary p-0 m-0"
                    onClick={() => this.cancelRequest(this.guide_data.ref)}
                  >
                    Cancel Request
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        {!this.guide_data && (
          <>
            <form onSubmit={this.searchGuide}>
              <div className="form-group">
                <label htmlFor="query">Search guide</label>
                <input
                  type="text"
                  name="query"
                  id="query"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-info">
                  Search
                </button>
              </div>
            </form>
            <div className="">
              <b>Search results</b>
              <div className="">
                {this.data.length
                  ? this.data.map((guide) => (
                      <div
                        className="studentCard w-75 my-2 rounded p-2"
                        style={{
                          background:
                            "linear-gradient(to right, #f8f9fa, #ffffff)",
                        }}
                      >
                        <>
                          <b className="d-block">{guide.name}</b>
                          <span className="d-block">{guide.branch}</span>
                          <span className="d-block">{guide.email}</span>
                          {this.leader && (
                            <>
                              <button
                                className="btn text-primary p-0 m-0"
                                onClick={() => this.sendRequest(guide.id)}
                              >
                                Send Request
                              </button>
                            </>
                          )}
                        </>
                      </div>
                    ))
                  : "No search results"}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
