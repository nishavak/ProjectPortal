import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Assignment from "../components/student/Assignment";
import Assignments from "../components/student/Assignments";
import Header from "../components/student/Header";
import Profile from "../components/student/Profile";
import axios from "../axios";
import ChangePassword from "../components/shared/ChangePassword";
import GroupRegistration from "../components/student/GroupRegistration";
import Loading from "../components/shared/Loading";

export default class Student extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };

    this.leader = false;
    this.group_registered = false;
  }

  componentDidMount() {
    axios
      .get("groupRegistered/")
      .then(({ data }) => {
        this.group_registered = data;
        axios
          .get("amILeader/")
          .then(({ data }) => {
            this.leader = data;
            this.setState({ loading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) return <Loading />;
    if (!this.group_registered) return <GroupRegistration />;
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
        <Route component={ChangePassword} />
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
