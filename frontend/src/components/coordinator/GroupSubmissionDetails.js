import React from "react";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
// import "./GroupSubmissionDetails.scss";
// import GuideCommentSection from "../guide/assignment_details/GuideCommentSection";

class GroupSubmissionDetails extends React.Component {
  render() {
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
          <div
            className="shadow-sm col-12 col-md-3"
            style={{ paddingBottom: "2em", height: "80%" }}
          >
            <h5 className="text-center">Submission Files</h5>
            <hr />
            <Link
              to="files/dummy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="file-container mt-3 mr-3 py-1 px-3 text-center border rounded"
                style={{ borderColor: "gray" }}
              >
                dummy.pdf
              </div>
            </Link>
            <Link
              to="files/dummy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="file-container mt-3 mr-3 py-1 px-3 text-center border rounded"
                style={{ borderColor: "gray" }}
              >
                dummy.pdf
              </div>
            </Link>
            <Link
              to="files/dummy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="file-container mt-3 mr-3 py-1 px-3 text-center border rounded"
                style={{ borderColor: "gray" }}
              >
                dummy.pdf
              </div>
            </Link>
            <Link
              to="files/dummy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="file-container mt-3 mr-3 py-1 px-3 text-center border rounded"
                style={{ borderColor: "gray" }}
              >
                dummy.pdf
              </div>
            </Link>
            <Link
              to="files/dummy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="file-container mt-3 mr-3 py-1 px-3 text-center border rounded"
                style={{ borderColor: "gray" }}
              >
                dummy.pdf
              </div>
            </Link>
          </div>
          <div className="col-md-9 col-12">
            <div className="shadow-sm p-3">
              <h5 className="text-center p-2">Grades and Submission Status</h5>
              <hr />
              {/* <form> */}
              <div className="row">
                <div className="col-md-4 col-12 text-center">
                  <p className="text-center">Weightage:</p>
                  <p className="text-center">25</p>
                </div>
                <div class="form-group col-md-8 col-12 text-center">
                  <p className="text-center">Marks Assigned:</p>
                  <p className="text-center">25</p>
                </div>
              </div>
              {/* <div className='form-group text-center'>
                  <button
                    type='submit'
                    id='save'
                    class='btn btn-outline-success mb-2'
                    style={{ marginLeft: "1em" }}>
                    Save
                  </button>
                  <button
                    type='submit'
                    id='edit'
                    class='btn btn-outline-primary mb-2'
                    style={{ marginLeft: "1em" }}>
                    Edit
                  </button>
                </div> */}
              {/* </form> */}
            </div>
            <div className="col-12 p-0">{/* <GuideCommentSection /> */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupSubmissionDetails;
