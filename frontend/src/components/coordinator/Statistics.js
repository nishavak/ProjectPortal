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
      // this.subStats.forEach((element) => {
      //   if (element.grades.length !== 0) {
      //     element.grades.forEach((grade) => {
      //       this.downloadable.push({
      //         team_id: element.team_id,
      //         assignment_name: grade.assignment_name,
      //         submission_status: grade.submission_status,
      //       });
      //     });
      //   } else {
      //     this.downloadable.push({
      //       team_id: element.team_id,
      //       assignment_name: null,
      //       submission_status: null,
      //     });
      //   }
      // });
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
        {/* <div className="w-100 d-flex justify-content-center">
          <div
            className="btn btn-danger"
            onClick={() =>
              saveCsv(this.downloadable[0], {
                filename: "submission-statistics.csv",
              })
            }
          >
            <i className="fa fa-arrow-down mr-2" />
            Download
          </div>
        </div> */}
      </div>
    );
  }
}

export default Statistics;
