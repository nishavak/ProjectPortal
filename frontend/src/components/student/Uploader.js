import React, { Component } from "react";
import $ from "jquery";
import axios from "../../axios";
import { NotificationManager } from "react-notifications";

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: 0,
      files: [],
    };
    this.turned_in = false;
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
    if (!this.getUploadList().length) {
      alert("Blank Submission");
    } else {
      let approval = window.confirm(
        `Upload these ${this.getUploadList().length} files?`
      );
      if (approval) {
        console.log(this.getUploadList());
        let formData = new FormData();
        formData.append("files", this.state.files);
        axios
          .post(`assignmentSubmit/${this.props.match.params.id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(({ data }) => {
            alert("Uploaded");
            window.location.reload();
          })
          .catch((err) => NotificationManager.error(err.response.data));
      } else {
        alert("Upload cancelled");
      }
    }
  };

  render() {
    return (
      <div className="">
        <p className="text-center py-4">Upload Files</p>
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
        <div className="my-5 w-100">
          {this.turned_in ? (
            <div className="w-100 text-center">
              <button className="btn btn-dark" onClick={() => {}}>
                Unsubmit
              </button>
            </div>
          ) : (
            <div className="w-100 text-center">
              <button className="btn btn-dark" onClick={this.handleSubmit}>
                Turn In
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Uploader;
