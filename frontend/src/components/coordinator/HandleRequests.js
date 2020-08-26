import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HandleRequests.scss";
import axios from "../../axios";

class HandleRequests extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "All",
    };
    this.project_requests = [];
    this.group_requests = [];
  }
  componentDidMount() {
    axios
      .get("coordinatorGroupRequest/")
      .then(({ data }) => {
        this.group_requests = data.group_requests;
        console.log(this.group_requests);
        this.setState({});
      })
      .catch((err) => this.props.history.goBack());

    axios
      .get("coordinatorProjectRequest/")
      .then(({ data }) => {
        this.project_requests = data.project_requests;
        console.log(this.project_requests);
        this.setState({});
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    return (
      <div className="handle-requests mx-auto" style={{ width: "85%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Handle Requests
        </div>
        <br />

        <div class="form-group">
          <label for="sel1">Select type of requests</label>
          <select
            class="form-control"
            id="sel1"
            onChange={() => {
              this.setState({ view: document.getElementById("sel1").value });
            }}
          >
            <option selected>All</option>
            <option>Group</option>
            <option>Project</option>
          </select>
        </div>

        {this.group_requests &&
          (this.state.view === "Group" || this.state.view === "All") &&
          this.group_requests.map((req) => {
            return (
              <div className="col-12  shadow-sm p-0">
                <div
                  className="bg-light font-weight-bold p-2"
                  style={{ color: "rgb(183, 32, 46)", fontSize: "1em" }}
                >
                  {req.action}
                </div>

                <div
                  className="d-flex flex-md-row flex-column px-2 py-1 text-muted"
                  style={{ fontSize: "0.9em" }}
                >
                  <div className="col-md-6 col-12  p-0">
                    Group Number : {req.team}
                  </div>
                  <div className="col-md-6 col-12 p-0 pt-1">
                    {req.action === "Change Leader" && (
                      <span>Current Leader: {req.old_leader}</span>
                    )}
                    {req.action === "Removal" && (
                      <span>Student to be removed: {req.remove_student}</span>
                    )}
                    {req.action === "Add" && (
                      <span>Student to be added: {req.add_student}</span>
                    )}
                  </div>
                </div>

                {req.action === "Change Leader" && (
                  <div
                    className="px-2 text-muted py-1"
                    style={{ fontSize: "0.9em" }}
                  >
                    New Leader : {req.new_leader}
                  </div>
                )}
                <div
                  className="px-2 text-muted py-1"
                  style={{ fontSize: "0.9em" }}
                >
                  Description : {req.description}
                </div>
                <div className="d-flex flex-md-row flex-column py-1">
                  <div className="d-flex flex-row px-2 col-md-6 col-12">
                    <div className="pr-1">
                      <button className="btn btn-outline-success ">
                        Accept
                      </button>
                    </div>
                    <div className="pl-1">
                      <button className="btn btn-outline-danger ">
                        Reject
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-flex link  align-items-center py-2">
                    <Link to="/group/:id">
                      <div className="text-primary">View Group Details</div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        {this.project_requests &&
          (this.state.view === "Project" || this.state.view === "All") &&
          this.project_requests.map((req) => {
            return (
              <div className="col-12  shadow-sm p-0">
                <div
                  className="bg-light font-weight-bold p-2"
                  style={{ color: "rgb(183, 32, 46)", fontSize: "1em" }}
                >
                  Project Approval Request
                </div>

                <div
                  className="d-flex flex-md-row flex-column px-2 py-1 text-muted"
                  style={{ fontSize: "0.9em" }}
                >
                  <div className="col-md-6 col-12  p-0">
                    {" "}
                    Project id: {req.project}
                  </div>
                  <div className="col-md-6 col-12 p-0 pt-1">
                    Request Id :{req.id}
                  </div>
                </div>

                <div
                  className="px-2 text-muted py-1 text-wrap"
                  style={{ fontSize: "0.9em", wordBreak: "break-word" }}
                >
                  Request Description : {req.description}
                </div>
                <div className="d-flex flex-md-row  flex-column py-1">
                  <div className="col-md-6 col-12">
                    <form>
                      <div className="d-flex flex-row px-2">
                        <div className="pr-1">
                          <button className="btn btn-outline-success ">
                            Accept
                          </button>
                        </div>
                        <div className="pl-1">
                          <button className="btn btn-outline-danger ">
                            Reject
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-12 d-flex link  align-items-center py-2">
                    <Link to={`/project/${req.project}`}>
                      <div className="text-primary">View Project Details</div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        {/* <div className='container'>
          <div className='p-2 px-3 d-flex flex-md-row flex-column'>
            <div className='col-md-4 pb-4'>
              <Card className='shadow' border='light'>
                <Card.Body>
                  <Card.Title className='text-center'>
                    Change Leader Request
                  </Card.Title>
                  <Card.Text className='text-center'>
                    <Link to='/group/:id' style={{ textDecoration: "none" }}>
                      Click to view group details
                    </Link>
                  </Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroupItem>
                    Group Number: <span style={{ float: "right" }}>1</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Current Leader:{" "}
                    <span style={{ float: "right" }}>Jill Shah</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    New Leader:{" "}
                    <span style={{ float: "right" }}>Atharva Kitkaru</span>
                  </ListGroupItem>
                </ListGroup>
                <div className='d-flex flex-md-row flex-column bg-warning mx-auto'>
                  <div className='col-md-4 col-12 text-center p-2'>
                    <Button variant='success'>Accept</Button>
                  </div>
                  <div className='col-md-4 col-12 text-center p-2'>
                    <Button variant='danger'>Reject</Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className='col-md-4 pb-4'>
              <Card className='shadow' border='light'>
                <Card.Body>
                  <Card.Title className='text-center'>
                    Remove Member Request
                  </Card.Title>
                  <Card.Text className='text-center'>
                    <Link to='/group/:id' style={{ textDecoration: "none" }}>
                      Click to view group details
                    </Link>
                  </Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroupItem>
                    Member Name:{" "}
                    <span style={{ float: "right" }}>Jill Shah</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Group Number: <span style={{ float: "right" }}>1</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Guide Name: <span style={{ float: "right" }}>ABCD</span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button variant='success' style={{ float: "left" }}>
                    Remove
                  </Button>
                  <Button variant='danger' style={{ float: "right" }}>
                    Reject request
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-md-4 pb-4'>
              <Card className='shadow' border='light'>
                <Card.Body>
                  <Card.Title className='text-center'>
                    Project Approval Request
                  </Card.Title>
                  <Card.Text className='text-center'>
                    <Link to='/project/:id' style={{ textDecoration: "none" }}>
                      Click to view project details
                    </Link>
                  </Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroupItem>
                    Group Number: <span style={{ float: "right" }}>1</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Leader Name:{" "}
                    <span style={{ float: "right" }}>Jill Shah</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Guide Name: <span style={{ float: "right" }}>ABCD</span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button variant='success' style={{ float: "left" }}>
                    Approve project
                  </Button>
                  <Button variant='danger' style={{ float: "right" }}>
                    Reject project
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default HandleRequests;
