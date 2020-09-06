import React from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import "./AssignmentCreation.scss";
import $ from "jquery";
import { NotificationManager } from "react-notifications";

export default class AssignmentCreation extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: 0,
      files: [],
      due: "",
      title: "",
      description: "",
      weightage: null,
    };
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

  handleSubmit = (e) => {
    e.preventDefault();

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
      .post(`coordinatorCreateAssignment/`, formData, config)
      .then(({ data }) => {
        alert("Assignment created");
        window.location.reload();
      })
      .catch((err) => {
        NotificationManager.error("Error creating assignment");
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onDateChange = (date) => this.setState({ due: date.toLocaleString("en-IN") });
  render() {
    return (
      <div className="assignment-details mx-auto " style={{ width: "85%" }}>
        <br />
        <div
          className="p-2 text-center shadow-sm rounded font-weight-bold  mx-auto"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Create Assignment
        </div>
        <div className="d-flex flex-column flex-md-row">
          <div className=" text-left col-12 col-md-7 form-section mx-auto mt-4 ">
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
                  />
                </div>
                <div className="form-group">
                  <label for="weightage">Weightage (optional)</label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="weightage"
                    name="weightage"
                    placeholder="Enter marks weightage here..."
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group d-flex flex-md-row flex-column">
                  <div className="col-md-6 p-1">
                    <p>Due Date and Time (optional)</p>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="due"
                      name="due"
                      onChange={this.handleChange}
                      value={this.state.due}
                    />
                  </div>
                  <div className="col-md-6 p-1">{/* <Uploader /> */}</div>
                </div>
                <div className="form-group">
                  <br />
                  <button type="submit" className="btn btn-light">
                    Create
                  </button>
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
                ></ul>
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => this.addInput("files")}
                >
                  Attach Files
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => this.addInput("folder")}
                >
                  Attach Folder
                </button>
              </div>
            </>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <Link to="/assignments">
            <button className="btn btn-danger">
              {/* <i className="fa fa-arrow-left mr-2" aria-hidden="true" /> */}
              Assignments
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
