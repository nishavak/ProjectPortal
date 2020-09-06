import React from "react";
import { Button } from "react-bootstrap";
import "./AssignmentDetails.scss";
import { Link, Route } from "react-router-dom";
// import Uploader from "../student/Uploader";
import $ from "jquery";
import SubmissionStatus from "./SubmissionStatus";
//import DateTimePicker from "react-datetime-picker";
import axios from "../../axios";
import Loading from "../shared/Loading";
import { NotificationManager } from "react-notifications";
class AssignmentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      inputId: 0,
      files: [],
      due: "",
      title: "",
      description: "",
      weightage: null,
    };
    this.id = this.props.match.params.id;
    this.ass = {};
    this.deleteList = [];
  }
  /* 
  
  Removing an item sets File to {} in the FileList.
  While submitting, retrieve all not null objects and POST.

  */

  removeItem = (inputId, key) => {
    let files = this.state.files;
    // ! if used splice then index may not match. Shifting of array issue arises.
    let toRemoveInput = Array.from(files[inputId]);
    toRemoveInput[key] = {};
    files[inputId] = toRemoveInput;
    this.setState({
      files: files,
    });
  };

  createListItem = (name, inputId, key) => {
    let that = this;
    return $("<li>", {
      class:
        "list-group-item border-0 rounded-0 d-flex justify-content-between align-items-center m-0",
    })
      .append(
        $("<span>", {
          text: name,
        })
      )
      .append(
        $("<i>", {
          class: "fa fa-close",
          role: "button",
        }).on("click", function () {
          that.removeItem(inputId, key);
          $(this).parent().remove();
        })
      );
  };

  addInput = (type) => {
    const that = this;
    let inputId = this.state.inputId;

    // create input files selection
    if (type === "files")
      $("#uploadFilesInputContainer").append(
        $("<input>", {
          class: "form-control-file",
          type: "file",
          multiple: true,
          inputId: inputId,
          // webkitdirectory: true,
        })
      );

    // create input folder selection
    if (type === "folder")
      $("#uploadFilesInputContainer").append(
        $("<input>", {
          class: "form-control-file",
          type: "file",
          multiple: true,
          inputId: inputId,
          webkitdirectory: true,
        })
      );

    // ! states should not be directly altered
    // initialise files[inputId] with {}
    let files = this.state.files;
    files[inputId] = {};
    this.setState({
      files: files,
    });

    // update List and state on change
    $(`[inputId="${inputId}"]`)
      .trigger("click")
      .on("change", function () {
        let currentInput = this;
        let files = that.state.files;

        // * updating files in state with new entries
        files[inputId] = currentInput.files;
        that.setState({
          files: files,
        });

        // update file List visible to the user
        for (let i = 0; i < currentInput.files.length; i++) {
          const file = currentInput.files[i];
          $("#uploadFilesList").append(
            that.createListItem(file.name, inputId, i)
          );
        }
      });

    //   increment inputId
    this.setState({
      inputId: this.state.inputId + 1,
    });
  };

  getUploadList = () => {
    // * uploadList is the list to be uploaded
    let uploadList = [];
    for (let i = 0; i < this.state.files.length; i++) {
      const fileList = this.state.files[i];
      let fileListArr = Array.from(fileList);
      for (let j = 0; j < fileListArr.length; j++) {
        const file = fileListArr[j];
        if (!$.isEmptyObject(file)) {
          uploadList.splice(0, 0, file);
        }
      }
    }
    // ! issue: removing duplicates with same keys but different directories
    // ! if __init__.py is to be included, there could be multiple of them but from different directories.
    // let cleanedUploadList = _.uniqWith(uploadList, _.isEqual);
    // let cleanedUploadList = _.uniqBy(uploadList, ["name", "size"]);
    // * google allows duplicates

    return uploadList; // returns file List with duplicates
  };

  componentDidMount() {
    axios
      .get(`coordinatorAssignmentDetail/${this.id}/`)
      .then(({ data }) => {
        console.log(data);
        this.ass = data;
        this.setState({
          loading: false,
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

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("coordinatorRemoveAttachments/", { delete_list: this.deleteList })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));

    let formData = new FormData();
    let u = this.getUploadList();
    for (let i = 0; i < u.length; i++) {
      formData.append(`file[${i}]`, u[i]);
    }
    // formData.append("attachments", this.getUploadList());
    formData.append("attachment_count", u.length);
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("due", Date.parse(new Date(this.state.due)) / 1000 || null);
    formData.append("weightage", this.state.weightage || null);
    // const that = this;
    const config = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .put(`coordinatorAssignmentDetail/${this.id}/`, formData, config)
      .then(({ data }) => {
        alert("Assignment updated");
        // window.location.reload();
      })
      .catch((err) => {
        NotificationManager.error("Error creating assignment");
      });
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
    if (this.state.loading) return <Loading />;
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
        <div className="d-flex flex-column flex-md-row py-3">
          <div className="col-12 col-md-7 my-4 form-section">
            <div className="">
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
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="description">Descriptional (optional)</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Enter description here ..."
                    onChange={this.handleChange}
                    value={
                      this.ass.assignment_details ? this.state.description : ""
                    }
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
                  />
                </div>
                <div className="form-group">
                  <label for="due">Due Date and Time (optional)</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="due"
                    name="due"
                    onChange={this.handleChange}
                    value={this.ass.assignment_details ? this.state.due : 0}
                  />
                </div>
                <div className="form-group d-flex justify-content-between">
                  <Button variant="outline-success" id="save" type="submit">
                    Save Changes
                  </Button>

                  <Button
                    variant="outline-danger"
                    id="delete"
                    onClick={this.deleteAss}
                  >
                    {" "}
                    Delete
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-5 my-4">
            <>
              <div
                className="mx-auto my-4 w-100 bg-light shadow-sm overflow-auto row"
                style={{
                  height: "50vh",
                }}
              >
                <div id="uploadFilesInputContainer" hidden></div>
                <ul
                  className="list-group list-group-flush w-100"
                  id="uploadFilesList"
                >
                  {this.ass.assignment_details.files.length ? (
                    this.ass.assignment_details.files.map((file) => (
                      <li
                        key={file.id}
                        className="list-group-item border-0 rounded-0 d-flex justify-content-between align-items-center m-0"
                        style={{ cursor: "pointer" }}
                      >
                        <span onClick={() => window.open(file.url)}>
                          {file.name}
                        </span>
                        <i
                          className="fa fa-close"
                          role="button"
                          onClick={(event) => {
                            this.deleteList.push(file.id);
                            console.log(this.deleteList);
                            $(event.target).parent().remove();
                          }}
                        ></i>
                      </li>
                    ))
                  ) : (
                    <>
                      <i className="text-center m-5 p-5 d-flex align-self-center">
                        No attachments
                      </i>
                    </>
                  )}
                </ul>
              </div>
              <div
                className="d-flex justify-content-between"
                hidden={this.isFileUploadEnabled}
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.addInput("files")}
                >
                  Attach Files
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => this.addInput("folder")}
                >
                  Attach Folder
                </button>
              </div>
            </>
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
          <Route
            render={(props) => <SubmissionStatus {...props} id={this.id} />}
          />
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
