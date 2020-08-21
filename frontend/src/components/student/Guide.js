import React, { Component } from "react";

export default class Guide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: true,
    };
  }

  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center slide-in-fwd-center"
        style={{ minHeight: "100%" }}
      >
        {this.state.request && (
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
        {!this.state.request && (
          <>
            <form>
              <div className="form-group">
                <label htmlFor="search">Search guide</label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="form-control"
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
                <div
                  className="studentCard w-75 my-2 rounded p-2"
                  style={{
                    background: "linear-gradient(to right, #f8f9fa, #ffffff)",
                  }}
                >
                  <b className="d-block">Nishavak Santosh Naik</b>
                  <span className="d-block">Information Technology</span>
                  <span className="d-block">nishavak.n@somaiya.edu</span>
                  <a href="#">Send request</a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
