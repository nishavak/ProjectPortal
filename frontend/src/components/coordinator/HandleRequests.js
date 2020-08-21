import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HandleRequests.scss";

class HandleRequests extends React.Component {
  render() {
    return (
      <div className='handle-requests mx-auto' style={{ width: "85%" }}>
        <br />
        <div
          className='p-2 px-3 text-center shadow-sm rounded font-weight-bold'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Handle Requests
        </div>
        <br />

        <div class='form-group'>
          <label for='sel1'>Select type of requests</label>
          <select class='form-control' id='sel1'>
            <option>Group</option>
            <option>Project</option>
            <option>All</option>
          </select>
        </div>

        <div>
          <div className='col-12  shadow-sm p-0'>
            <div
              className='bg-light font-weight-bold p-2'
              style={{ color: "rgb(183, 32, 46)", fontSize: "1em" }}>
              Change Leader Request
            </div>

            <div
              className='d-flex flex-md-row flex-column px-2 py-1 text-muted'
              style={{ fontSize: "0.9em" }}>
              <div className='col-md-6 col-12  p-0'>Group Number :1</div>
              <div className='col-md-6 col-12 p-0 pt-1'>
                Current Leader : abdkasjdakfajdfadfada
              </div>
            </div>

            <div className='px-2 text-muted py-1' style={{ fontSize: "0.9em" }}>
              New Leader : adsjklajdfklajdkaljakldjakldjafkldj
            </div>
            <div className='d-flex flex-md-row flex-column py-1'>
              <div className='d-flex flex-row px-2 col-md-6 col-12'>
                <div className='pr-1'>
                  <button className='btn btn-outline-success '>Accept</button>
                </div>
                <div className='pl-1'>
                  <button className='btn btn-outline-danger '>Reject</button>
                </div>
              </div>
              <div className='col-md-6 col-12 d-flex link  align-items-center py-2'>
                <Link to='/group/:id'>
                  <div className='text-primary'>View Group Details</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

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
