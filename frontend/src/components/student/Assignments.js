import React, { Component } from "react";
import AssignmentCard from "./AssignmentCard";
import "./Assignments.scss";
import { Route } from "react-router-dom";

export class Assignments extends Component {
  state = {
    tab: "all",
    assignments: [
      {
        id: 1,
        status: "submitted",
      },
      {
        id: 2,
        status: "not-submitted",
      },
      {
        id: 3,
        status: "graded",
      },
      {
        id: 4,
        status: "graded",
      },
      {
        id: 4,
        status: "graded",
      },
      {
        id: 4,
        status: "graded",
      },
      {
        id: 4,
        status: "graded",
      },
    ],
  };
  render() {
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
            this.state.assignments.map((assignment) => (
              <Route render={(props) => <AssignmentCard {...props} id={1} />} />
            ))}
          {this.state.tab === "submitted" &&
            this.state.assignments
              .filter((assignment) => assignment.status === "submitted")
              .map((assignment) => (
                <Route
                  render={(props) => (
                    <AssignmentCard {...props} id={assignment.id} />
                  )}
                />
              ))}
          {this.state.tab === "not-submitted" &&
            this.state.assignments
              .filter((assignment) => assignment.status === "not-submitted")
              .map((assignment) => (
                <Route
                  render={(props) => (
                    <AssignmentCard {...props} id={assignment.id} />
                  )}
                />
              ))}
          {this.state.tab === "graded" &&
            this.state.assignments
              .filter((assignment) => assignment.status === "graded")
              .map((assignment) => (
                <Route
                  render={(props) => (
                    <AssignmentCard {...props} id={assignment.id} />
                  )}
                />
              ))}
        </div>
      </div>
    );
  }
}

export default Assignments;
