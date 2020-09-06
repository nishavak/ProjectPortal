import React from "react";
import { Link } from "react-router-dom";

import axios from "../../axios";
import Loading from "../shared/Loading";
class GroupSubmissionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.ass_id = this.props.match.params.assignment;
    this.team_id = this.props.match.params.team;
    this.file_list = [];
    this.students_data = [];
    this.weightage = null;
  }

  componentDidMount() {
    axios
      .get(`coordinatorGroupSubmissionDetails/${this.ass_id}/${this.team_id}/`)
      .then(({ data }) => {
        console.log(data);
        this.file_list = data.file_list;
        this.students_data = data.students_data;
        this.weightage = data.weightage;
        this.setState({ loading: false });
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div
        className="group-submission-details mx-auto"
        style={{ width: "90%" }}
      >
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Group Submission Details
        </div>
        <br />
        <div className="row">
          <div className="shadow-sm col-12 col-md-7 p-3 rounded">
            <h5 className="text-center">Submission Files</h5>
            <hr />
            {this.file_list &&
              this.file_list.map((file) => {
                return (
                  <Link
                    to={file.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="file-container mt-3 mr-3 py-1 px-3 text- border rounded text-wrap "
                      style={{ borderColor: "gray", wordBreak: "break-word" }}
                    >
                      {file.file_name}
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="col-md-5 col-12">
            <div className="shadow-sm p-3">
              <h5 className="text-center">Grades</h5>
              <hr />
              <p className="text-">Weightage: {this.weightage || "-"}</p>
              <p className="text-">Marks Assigned:</p>

              <div className="d-flex flex-column ">
                {this.students_data &&
                  this.students_data.map((student) => {
                    return (
                      <div className="d-flex flex-row text-">
                        <div className="col-md-6  ">
                          {student.student_roll_number}
                        </div>
                        <div class="col-md-6">
                          <span className="">
                            {student.student_marks || "N/A"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-12 p-0">{/* <GuideCommentSection /> */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupSubmissionDetails;
