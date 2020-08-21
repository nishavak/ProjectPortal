import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "../../axios";
import "./StudentList.scss";
import saveCsv from "save-csv/save-csv.min.js";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.students = [];
    this.downloadable = [];
  }
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
      this.setState({});
    });
  }

  render() {
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
        <div
          className="mx-auto back-button p-2 text-center my-4 rounded-lg"
          onClick={() => saveCsv(this.downloadable[0])}
        >
          <i className="fa fa-arrow-down mr-2" />
          Download
        </div>
      </div>
    );
  }
}
export default StudentList;
