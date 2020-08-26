import React from "react";
import { Button } from "react-bootstrap";
import "./AssignmentDetails.scss";
import { Link } from "react-router-dom";
// import Uploader from "../student/Uploader";
import $ from "jquery";
import SubmissionStatus from "./SubmissionStatus";
//import DateTimePicker from "react-datetime-picker";
import axios from "../../axios";
class AssignmentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.id = this.props.match.params.id;
    this.ass = {};
  }

  componentDidMount() {
    $("#save").attr("disabled", true);
    axios
      .get(`coordinatorAssignmentDetail/${this.id}/`)
      .then(({ data }) => {
        console.log(data);
        this.ass = data;
        this.setState({
          title: data.assignment_details.assignment.assignment_title,
          due: data.assignment_details.assignment.assignment_due,
          description:
            data.assignment_details.assignment.assignment_description,
          weightage: data.assignment_details.assignment.assignment_weightage,
        });
      })
      .catch((err) => this.props.history.goBack());
  }

  handleChange = (e) => {
    console.log(this.state);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  allowEdit = () => {
    $("#title").attr("disabled", false);
    $("#due").attr("disabled", false);
    $("#weightage").attr("disabled", false);
    $("#description").attr("disabled", false);
    $("#edit").attr("disabled", true);
    $("#save").attr("disabled", false);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    $("#title").attr("disabled", true);
    $("#due").attr("disabled", true);
    $("#weightage").attr("disabled", true);
    $("#description").attr("disabled", true);
    $("#save").attr("disabled", true);
    $("#edit").attr("disabled", false);

    axios
      .put(`coordinatorAssignmentDetail/${this.id}/`, {
        ...this.state,
        due: Date.parse(new Date(this.state.due)),
      })
      .catch((err) => console.log(err));
  };
  deleteAss = () => {
    axios
      .delete(`coordinatorAssignmentDetail/${this.id}/`)
      .then((res) => {
        this.props.history.goBack();
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="assignment-details mx-auto" style={{ width: "90%" }}>
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
          Assignment Details
        </div>
        <div className="p-3 text-center form-section mx-auto">
          <div className="mt-4">
            <form id="assignment-form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="title">
                  Title <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter title here ..."
                  onChange={this.handleChange}
                  value={this.ass.assignment_details ? this.state.title : ""}
                  disabled={true}
                  required
                />
              </div>
              <div className="form-group">
                <label for="description">Descriptional (optional)</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="Enter description here ..."
                  onChange={this.handleChange}
                  value={
                    this.ass.assignment_details ? this.state.description : ""
                  }
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label for="weightage">Weightage (optional)</label>
                <input
                  type="number"
                  className="form-control"
                  id="weightage"
                  name="weightage"
                  placeholder="Enter marks weightage here..."
                  onChange={this.handleChange}
                  value={
                    this.ass.assignment_details ? this.state.weightage : ""
                  }
                  disabled={true}
                />
              </div>
              <div className="form-group d-flex flex-md-row flex-column">
                <div className="col-md-6 p-1">
                  <div className="form-group">
                    <label for="due">Due Date and Time (optional)</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="due"
                      name="due"
                      onChange={this.handleChange}
                      value={this.ass.assignment_details ? this.state.due : ""}
                      disabled={true}
                    />
                  </div>
                  {/*<p>Due Date and Time</p><DateTimePicker onChange={onChange} value={value} />*/}
                </div>
                <div className="col-md-6 p-1">
                  <div className="form-group">{/* <Uploader /> */}</div>
                </div>
              </div>
              <div className="form-group buttons">
                <Button variant="outline-success" id="save" type="submit">
                  Save
                </Button>
                <Button
                  variant="outline-info"
                  id="edit"
                  onClick={this.allowEdit}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  id="delete"
                  style={{ marginRight: "2em" }}
                  onClick={this.deleteAss}
                >
                  {" "}
                  Delete
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="submission-status">
          <div
            className=" p-2 text-center shadow-sm rounded font-weight-bold  mx-auto"
            style={{
              color: "rgb(183, 32, 46)",
              fontSize: "1.1em",
              width: "auto",
              backgroundColor: "rgba(231, 231, 231, 0.459)",
            }}
          >
            Submission Status of Groups
          </div>
          <SubmissionStatus id={this.id} />
        </div>

        <div className="w-100 d-flex justify-content-center">
          <Link to="/assignments">
            <div className="btn btn-danger">
              {/* <i className="fa fa-arrow-left mr-2" aria-hidden="true" /> */}
              Assignments
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default AssignmentDetails;
