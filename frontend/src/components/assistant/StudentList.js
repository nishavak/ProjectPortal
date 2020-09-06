import React, { Component } from "react";
import saveCsv from "save-csv/save-csv.min.js";
import axios from "../../axios";
import Loading from "../shared/Loading";
import "./StudentList.scss";

function compare_group_id(a, b) {
  // Use toUpperCase() to ignore character casing
  const studentA = a.group_id;
  const studentB = b.group_id;

  let comparison = 0;
  if (studentA > studentB) {
    comparison = 1;
  } else if (studentA < studentB) {
    comparison = -1;
  }
  return comparison;
}

function compare_student_roll_number(a, b) {
  // Use toUpperCase() to ignore character casing
  const studentA = a.student_roll_number;
  const studentB = b.student_roll_number;

  let comparison = 0;
  if (studentA > studentB) {
    comparison = 1;
  } else if (studentA < studentB) {
    comparison = -1;
  }
  return comparison;
}

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.students = [];
    this.downloadable = [];
    this.state = { loading: true };
  }
  sort_by = (q) => {
    if (q === "group_id") {
      this.students.sort(compare_group_id);
    } else {
      this.students.sort(compare_student_roll_number);
    }
    this.setState({ loading: false });
  };
  componentDidMount() {
    axios.get("coordinatorStudent/").then(({ data }) => {
      console.table(data);
      this.students = data;
      this.downloadable.push(
        this.students.map((student) => {
          return {
            student_roll_number: student.student_roll_number,
            student_name: student.student_name,
            group_id: student.group_id,
            project_name: student.project_name,
            student_branch: student.student_branch,
            guide_name: student.guide_name,
          };
        })
      );
      console.log(this.downloadable);
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="student-list mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Student List
        </div>
        <br />

        <div className="w-100">
          <div className="dropdown">
            <button
              className="btn btn-danger dropdown-toggle"
              data-toggle="dropdown"
            >
              Sort by
            </button>
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                onClick={() => this.sort_by("group_id")}
              >
                Group Id
              </div>
              <div
                className="dropdown-item"
                onClick={() => this.sort_by("student_roll_number")}
              >
                Roll number
              </div>
            </div>
          </div>
        </div>

        <br />

        <div class="table-responsive">
          <table class="ui striped table">
            <thead class="text-center">
              <tr class="">
                <th class="" scope="col">
                  Roll Number
                </th>
                <th class="" scope="col">
                  Student Name
                </th>
                <th class="" scope="col">
                  Group Number
                </th>
                <th class="" scope="col">
                  Project Name
                </th>
                <th class="" scope="col">
                  Branch
                </th>
                <th class="" scope="col">
                  Guide Name
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              {this.students &&
                this.students.map((student) => (
                  <tr
                    class=""
                    onClick={() =>
                      this.props.history.push(`/student/${student.student_id}`)
                    }
                  >
                    <td class="">{student.student_roll_number}</td>
                    <td class="">{student.student_name}</td>
                    <td class="">{student.group_id || "-"}</td>
                    <td class="">{student.project_name || "-"}</td>
                    <td class="">{student.student_branch}</td>
                    <td class="">{student.guide_name || "-"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div
            className="btn btn-danger"
            onClick={() =>
              saveCsv(this.downloadable[0], {
                filename: "student-list.csv",
              })
            }
          >
            {/* <i className="fa fa-arrow-down mr-2" /> */}
            Download
          </div>
        </div>
      </div>
    );
  }
}
export default StudentList;
