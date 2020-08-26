import React from "react";
import "./Statistics.scss";
import saveCsv from "save-csv/save-csv.min.js";
import axios from "../../axios";

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.assignment_list = [];
    this.subStats = [];
    // this.downloadable = [];
  }
  componentDidMount() {
    axios.get("coordinatorSubmissionStatistics/").then(({ data }) => {
      console.log(data);
      if (data[0]) {
        data[0].grades.forEach((grade) => {
          this.assignment_list.push(grade.assignment_name);
        });
      }
      this.subStats = data;
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
      <div className="statistics mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className=" p-2 text-center shadow-sm rounded font-weight-bold  mx-auto"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Submission Statistics
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
              {this.subStats &&
                this.subStats.map((team) => {
                  return (
                    <tr class="">
                      <td class="">Group no. {team.team_id}</td>
                      {team.grades &&
                        team.grades.map((grade) => {
                          return <td class="">{grade.submission_status}</td>;
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
            onClick={() =>
              saveCsv(this.downloadable[0], {
                filename: "submission-statistics.csv",
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

export default Statistics;
