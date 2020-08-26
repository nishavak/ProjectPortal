import React, { Component } from "react";
import "./GradingStatistics.scss";
import saveCsv from "save-csv/save-csv.min.js";
import axios from "../../axios";

class GradingStats extends Component {
  constructor(props) {
    super(props);
    this.assignment_list = [];
    this.gradeStats = [];
    // this.downloadable = [];
  }
  componentDidMount() {
    axios.get("coordinatorGradingStatistics/").then(({ data }) => {
      console.log(data);
      if (data[0]) {
        data[0].grade_list.forEach((grade) => {
          this.assignment_list.push(grade.assignment_name);
        });
      }
      this.gradeStats = data;
      // this.downloadable.push(
      //   this.students.map((student) => {
      //     return {
      //       student_roll_number: student.student_roll_number,
      //       student_name: student.student_name,
      //       group_id: student.group_id,
      //       project_name: student.project_name,
      //       student_branch: student.student_branch,
      //       guide_name: student.guide_name,
      //     };
      //   }),
      // );
      // console.log(this.downloadable);
      this.setState({});
    });
  }
  render() {
    return (
      <div className="grading-stats mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Grading Statistics
        </div>

        <br />

        <div class="table-responsive-sm">
          <table class="ui striped table">
            <thead class="text-center">
              <tr class="">
                <th class="" scope="col">
                  Assignment Title{" "}
                  <i className="fa fa-arrow-right mr-2" aria-hidden="true" />
                </th>
                {this.assignment_list &&
                  this.assignment_list.map((name) => {
                    return (
                      <th class="" scope="col">
                        {name}
                      </th>
                    );
                  })}
              </tr>
            </thead>
            <tbody class="text-center">
              {this.gradeStats &&
                this.gradeStats.map((student) => {
                  return (
                    <tr class="">
                      <td class="">{student.roll_number}</td>
                      {student.grade_list &&
                        student.grade_list.map((grade) => {
                          return <td class="">{grade.marks}</td>;
                        })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="w-100 d-flex justify-content-center">
          {/* <div
            className='btn btn-danger'
            onClick={ () =>
              saveCsv(this.downloadable[0], {
                filename: "grading-statistics.csv",
              })
            }>
            <i className='fa fa-arrow-down mr-2' />
            Download
          </div> */}
        </div>
      </div>
    );
  }
}

export default GradingStats;
