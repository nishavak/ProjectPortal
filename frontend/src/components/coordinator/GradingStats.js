import React, { Component } from "react";
import "./GradingStatistics.scss";
import saveCsv from "save-csv/save-csv.min.js";
import axios from "../../axios";
import Loading from "../shared/Loading";

class GradingStats extends Component {
  constructor(props) {
    super(props);
    this.assignment_list = [];
    this.gradeStats = [];
    this.downloadable = [];
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
      this.gradeStats.forEach((data) => {
        if (data.grade_list.length) {
          data.grade_list.forEach((grade) => {
            this.downloadable.push({
              roll_number: data.roll_number,
              assignment_name: grade.assignment_name,
              marks: grade.marks,
            });
          });
        } else {
          this.downloadable.push({
            roll_number: data.team_id,
            assignment_name: null,
            marks: null,
          });
        }
      });
      console.log(this.downloadable);
      this.setState({ loading: false });
    });
  }
  render() {
    if (this.state.loading) return <Loading />;
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
          <div
            className="btn btn-danger"
            onClick={() =>
              saveCsv(this.downloadable, {
                filename: "grading-statistics.csv",
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

export default GradingStats;
