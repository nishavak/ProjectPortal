import React, { Component } from "react";
import Uploader from "./Uploader";

export default class Assignment extends Component {
  render() {
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
                This is the title of sample assignment Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Soluta inventore esse odit
                ab, nam deserunt adipisci nemo maxime quaerat sit. Repudiandae
                odio ex exercitationem iste, mollitia laboriosam temporibus
                reiciendis. Consectetur.
              </p>
              <hr />
              <div className="">
                <div className="d-flex justify-content-between">
                  <p className="m-0">Posted on:</p>
                  <p className="m-0">20/08/2020</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="m-0">Weightage:</p>
                  <p className="m-0">25</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="m-0">Due on:</p>
                  <p className="m-0">20/08/2020</p>
                </div>
              </div>
              <hr />
              <div className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis molestiae necessitatibus deleniti ea sed totam
                accusantium reiciendis nobis perspiciatis, culpa saepe obcaecati
                repellendus alias fugiat mollitia assumenda ipsam repellat
                doloremque!
              </div>
              <hr />
              <div className="">
                <ul className="list-group">
                  <li
                    className="attachment text-primary list-group-item border-0"
                    style={{ cursor: "pointer" }}
                  >
                    File.pdf
                  </li>
                  <li
                    className="attachment text-primary list-group-item border-0"
                    style={{ cursor: "pointer" }}
                  >
                    File.pdf
                  </li>
                  <li
                    className="attachment text-primary list-group-item border-0"
                    style={{ cursor: "pointer" }}
                  >
                    File.pdf
                  </li>
                  <li
                    className="attachment text-primary list-group-item border-0"
                    style={{ cursor: "pointer" }}
                  >
                    File.pdf
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-12 col-md-4 offset-md-1 bg-white rounded-lg shadow"
              style={{
                height: "75vh",
              }}
            >
              <Uploader />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
