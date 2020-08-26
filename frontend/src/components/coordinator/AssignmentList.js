import React from "react";
import { Link, Route } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import "./AssignmentList.scss";
import axios from "../../axios";
import Loading from "../shared/Loading";
class AssignmentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
    this.assignments = [];
  }

  componentDidMount() {
    axios
      .get(`coordinatorAssignmentList/`)
      .then(({ data }) => {
        this.assignments = data;
        this.setState({ loading: false });
      })
      .catch((err) => console.log(err));
  }
  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="assignment-list mx-auto " style={{ width: "90%" }}>
        <br />
        <div
          className=" p-2   text-center shadow-sm rounded font-weight-bold  mx-auto"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Assignments
        </div>
        <div className=" d-flex  flex-md-row flex-column justify-content-between mx-auto mt-4 p-0 bg-">
          <div className="col-md-3  align-self-center  p-0 my-1 bg-">
            <div class="dropdown ">
              <button
                className="btn btn-danger dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={
                  {
                    // backgroundColor: "rgb(183, 32, 46)",
                    // color: "white",
                    // outline: "0",
                    // boxShadow: "none",
                  }
                }
              >
                Actions
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/create-assignments">
                  Create Assignment
                </Link>

                <Link className="dropdown-item" to="/submission-statistics">
                  Submission Stats
                </Link>

                <Link className="dropdown-item" to="/grade-statistics">
                  Grading Stats
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          {this.assignments.length &&
            this.assignments.map((assignment) => (
              <Route
                render={(props) => (
                  <AssignmentCard {...props} info={assignment} />
                )}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default AssignmentList;
