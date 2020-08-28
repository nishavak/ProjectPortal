import React, { Component } from "react";
import AssignmentCard from "./GuideAssignmentCard";
import "./GuideAssignmentList.scss";
import $ from "jquery";
import GuideHeader from "./GuideHeader";
import axios from "../../axios";
import { Route } from "react-router-dom";

class GuideAssignmentList extends Component {
  constructor(props) {
    super(props);
    this.groupId = this.props.match.params.groupId;
    this.list = [];
    this.state = {
      tab: "All",
    };
  }

  componentDidMount() {
    axios
      .get(`guideAssignmentList/${this.groupId}/`)
      .then(({ data }) => {
        this.list = data;
        //this.setState({tab: this.list.grading_status});
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    return (
      <div>
        <Route component={GuideHeader} />
        <div id="AssignmentList">
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
                  id="All"
                  checked
                />
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
                  id="Submitted"
                />
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
                  id="Not Submitted"
                />
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
                  id="Graded"
                />
                Graded
              </label>
            </nav>
            {this.list &&
              this.list.map((assignment) => {
                if (this.state.tab === "All") {
                  return (
                    <Route
                      render={(props) => (
                        <AssignmentCard
                          {...props}
                          id={assignment.assignment_id}
                          groupId={this.groupId}
                          posted={assignment.assignment_posted}
                          title={assignment.assignment_title}
                          due={assignment.assignment_due}
                          weightage={assignment.assignment_weightage}
                        />
                      )}
                    />
                  );
                } else if (this.state.tab === assignment.grading_status) {
                  return (
                    <Route
                      render={(props) => (
                        <AssignmentCard
                          {...props}
                          id={assignment.assignment_id}
                          groupId={this.groupId}
                          title={assignment.assignment_title}
                          posted={assignment.assignment_posted}
                          due={assignment.assignment_due}
                          weightage={assignment.assignment_weightage}
                        />
                      )}
                    />
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default GuideAssignmentList;
