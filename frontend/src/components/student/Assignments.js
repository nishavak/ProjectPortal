import axios from "../../axios";
import React, { Component } from "react";
import AssignmentCard from "./AssignmentCard";
import "./Assignments.scss";
import { Route } from "react-router-dom";
import Loading from "../shared/Loading";

export class Assignments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tab: "all",
    };
    this.assignments = [];
  }

  componentDidMount() {
    axios
      .get("studentAssignments/")
      .then(({ data }) => {
        this.assignments = data;
        this.setState({ loading: false });
      })
      .catch((err) => {});
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div id="Assignments">
        <div className="container">
          <nav
            className="nav nav-fill nav-justified btn-group btn-group-toggle my-2"
            data-toggle="buttons"
          >
            <label className="nav-item btn btn-light border-0 active">
              <input
                onClick={(event) =>
                  this.setState({
                    tab: event.target.id,
                  })
                }
                type="radio"
                name="options"
                id="all"
                checked
              />{" "}
              All
            </label>
            <label className="nav-item btn btn-light border-0">
              <input
                onClick={(event) =>
                  this.setState({
                    tab: event.target.id,
                  })
                }
                type="radio"
                name="options"
                id="submitted"
              />{" "}
              Submitted
            </label>
            <label className="nav-item btn btn-light border-0">
              <input
                onClick={(event) =>
                  this.setState({
                    tab: event.target.id,
                  })
                }
                type="radio"
                name="options"
                id="not-submitted"
              />{" "}
              Not submitted
            </label>
            <label className="nav-item btn btn-light border-0">
              <input
                onClick={(event) =>
                  this.setState({
                    tab: event.target.id,
                  })
                }
                type="radio"
                name="options"
                id="graded"
              />{" "}
              Graded
            </label>
          </nav>
          {this.state.tab === "all" &&
            (this.assignments.length
              ? this.assignments.map((assignment) => (
                  <Route
                    render={(props) => (
                      <AssignmentCard
                        {...props}
                        id={assignment.id}
                        title={assignment.title}
                        due={assignment.due}
                        weightage={assignment.weightage}
                        posted={assignment.posted}
                      />
                    )}
                  />
                ))
              : "No assignments")}
          {this.state.tab === "submitted" &&
            (this.assignments.filter(
              (assignment) => assignment.status === "submitted"
            ).length
              ? this.assignments
                  .filter((assignment) => assignment.status === "submitted")
                  .map((assignment) => (
                    <Route
                      render={(props) => (
                        <AssignmentCard
                          {...props}
                          id={assignment.id}
                          title={assignment.title}
                          due={assignment.due}
                          weightage={assignment.weightage}
                          posted={assignment.posted}
                        />
                      )}
                    />
                  ))
              : "No assignments")}
          {this.state.tab === "not-submitted" &&
            (this.assignments.filter(
              (assignment) => assignment.status === "not-submitted"
            ).length
              ? this.assignments
                  .filter((assignment) => assignment.status === "not-submitted")
                  .map((assignment) => (
                    <Route
                      render={(props) => (
                        <AssignmentCard
                          {...props}
                          id={assignment.id}
                          title={assignment.title}
                          due={assignment.due}
                          weightage={assignment.weightage}
                          posted={assignment.posted}
                        />
                      )}
                    />
                  ))
              : "No assignments")}
          {this.state.tab === "graded" &&
            (this.assignments.filter(
              (assignment) => assignment.status === "graded"
            ).length
              ? this.assignments
                  .filter((assignment) => assignment.status === "graded")
                  .map((assignment) => (
                    <Route
                      render={(props) => (
                        <AssignmentCard
                          {...props}
                          id={assignment.id}
                          title={assignment.title}
                          due={assignment.due}
                          weightage={assignment.weightage}
                          posted={assignment.posted}
                        />
                      )}
                    />
                  ))
              : "No assignments")}
        </div>
      </div>
    );
  }
}

export default Assignments;
