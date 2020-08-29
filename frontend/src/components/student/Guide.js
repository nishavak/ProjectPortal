import React, { Component } from "react";
import axios from "../../axios";
import Loading from "../shared/Loading";

export default class Guide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sent_request: false,
      loading: false,
      query: "",
    };
    this.data = [];
    this.leader = false;
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (event) => {
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

  componentDidMount() {
    axios
      .get("amILeader/")
      .then(({ data }) => (this.leader = data))
      .catch((err) => {});
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div
        className="d-flex flex-column justify-content-center slide-in-fwd-center"
        style={{ minHeight: "100%" }}
      >
        {this.state.sent_request && (
          <div className="">
            <b>Sent Requests</b>
            <div
              className="studentCard w-75 my-2 rounded p-2"
              style={{
                background: "linear-gradient(to right, #f8f9fa, #ffffff)",
              }}
            >
              <b className="d-block">Nishavak Santosh Naik</b>
              <span className="d-block">Information Technology</span>
              <span className="d-block">nishavak.n@somaiya.edu</span>
              <a href="#">Cancel request</a>
            </div>
          </div>
        )}
        {!this.state.sent_request && (
          <>
            <form onSubmit={this.handleSubmit}>
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
                          {this.leader && <a href="#">Send request</a>}
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
