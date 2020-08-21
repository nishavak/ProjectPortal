import React from "react";
import { Button } from "react-bootstrap";
import "./AssignmentDetails.scss";
import { Link } from "react-router-dom";
import Uploader from "../student/Uploader";
import $ from "jquery";
import SubmissionStatus from "./SubmissionStatus";
//import DateTimePicker from "react-datetime-picker";

class AssignmentDetails extends React.Component {
  constructor() {
    super();
    this.state = {};
    // JSON.parse(localStorage.getItem("projectRegistrationFormData")) || {};
  }
  componentDidMount() {
    $("#save").attr("disabled", true);
  }
  handleChange = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };
  allowEdit = () => {
    $("#title").attr("readOnly", false);
    $("#date").attr("readOnly", false);
    $("#weightage").attr("readOnly", false);
    $("#description").attr("readOnly", false);
    $("#edit").attr("disabled", true);
    $("#save").attr("disabled", false);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ successfulSubmission: true });
    $("#title").attr("readOnly", true);
    $("#date").attr("readOnly", true);
    $("#weightage").attr("readOnly", true);
    $("#description").attr("readOnly", true);
    $("#save").attr("disabled", true);
    $("#edit").attr("disabled", false);
  };

  //let [value, onChange] = useState(new Date());
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
            backgroundColor: "rgba(231, 231, 231, 0.459)"
          }}
        >
          Assignment Details
        </div>
        <div className="p-3 text-center form-section mx-auto">
          <div className="mt-4">
            <form
              id="assignment-form"
              onSubmit={this.handleSubmit}
              /*onSubmit={e => {
                e.preventDefault();
                let i;
                for (
                  i = 0;
                  i <
                  document.getElementById("assignment-form").elements.length;
                  i++
                ) {
                  document.getElementById("assignment-form").elements[i].value =
                    "";
                }
                //value = "";
              }}*/
            >
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
                  value={this.state.title}
                  readOnly={true}
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
                  value={this.state.description}
                  readOnly={true}
                />
              </div>
              <div className="form-group">
                <label for="weightage">Weightage</label>
                <input
                  type="number"
                  className="form-control"
                  id="weightage"
                  name="number"
                  placeholder="Enter marks weightage here..."
                  onChange={this.handleChange}
                  value={this.state.weightage}
                  readOnly={true}
                  required
                />
              </div>
              <div className="form-group d-flex flex-md-row flex-column">
                <div className="col-md-6 p-1">
                  <div className="form-group">
                    <label for="date">Due Date and Time</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      onChange={this.handleChange}
                      value={this.state.date}
                      readOnly={true}
                      required
                    />
                  </div>
                  {/*<p>Due Date and Time</p><DateTimePicker onChange={onChange} value={value} />*/}
                </div>
                <div className="col-md-6 p-1">
                  <div className="form-group">
                    <Uploader />
                  </div>
                </div>
              </div>
              <div className="form-group buttons">
                <Button variant="outline-success" id="save" type="submit">
                  {/*style={{ display: "none" }}*/}
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
                >
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
              backgroundColor: "rgba(231, 231, 231, 0.459)"
            }}
          >
            Submission Status of Groups
          </div>
          <SubmissionStatus />
        </div>
        <Link to="/assignments">
          <div className="back-button mx-auto p-2 text-center my-5 rounded-lg text-wrap text-break">
            <i className="fa fa-arrow-left mr-2" aria-hidden="true" />
            Back to Assignments
          </div>
        </Link>
      </div>
    );
  }
}

export default AssignmentDetails;
