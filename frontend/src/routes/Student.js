import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/student/Header";
import Assignments from "../components/student/Assignments";
import Profile from "../components/student/Profile";
import Assignment from "../components/student/Assignment";

export default class Student extends React.Component {
  constructor(props) {
    super(props);

    this.leader = true;
  }

  render() {
    return (
      <>
        {this.leader && (
          <>
            <div
              className="modal fade"
              id="addStudent"
              tabindex="-1"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content border-0 shadow-sm">
                  <div className="modal-body">
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="roll_number">Enter roll number</label>
                        <input
                          type="number"
                          name="roll_number"
                          id="roll_number"
                          className="form-control"
                          required
                          min="0"
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-info">
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="removeStudent"
              tabindex="-1"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content border-0 shadow-sm">
                  <div className="modal-body">
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="roll_number">Enter roll number</label>
                        <input
                          type="number"
                          name="roll_number"
                          id="roll_number"
                          className="form-control"
                          required
                          min="0"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="reason">Reason</label>
                        <textarea
                          name="reason"
                          id="reason"
                          cols="30"
                          rows="10"
                          className="form-control"
                          placeholder="Provide the reason for removal of the member"
                          required
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-info">
                          Remove
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="swing-in-top-fwd min-vh-100">
          <Route component={Header} />
          <Switch>
            <Route path="/" exact component={Assignments} />
            <Route path="/assignment/:id" exact component={Assignment} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/" />
          </Switch>
        </div>
      </>
    );
  }
}
