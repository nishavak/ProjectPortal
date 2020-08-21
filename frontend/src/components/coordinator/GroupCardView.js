import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export class GroupCardView extends Component {
  render() {
    return (
      <div
        className='d-flex justify-content-between  flex-lg-row flex-column text-center p-0' /* style={{ margin: "2px auto" }} */
      >
        <Link
          to='/group/:id'
          id='group-item'
          className='text-dark'
          style={{ textDecoration: "none" }}>
          <div className='col-lg-4  col-12  mb-2  p-0 '>
            <Card
              className='shadow'
              /* style={{ minWidth: "100%" }} */ style={{ minWidth: "40vh" }}>
              <Card.Header>Group Number: 1</Card.Header>
              <Card.Body>
                <Card.Text>
                  Project Name: ABC
                  <br />
                  Number of Members: 2
                  <br />
                  Guide Name: Jill Shah
                  <br />
                  Project Type: Interdisciplinary
                  <br />
                  Leader Name: Nishavak
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Link>
      </div>
    );
  }
}

export default GroupCardView;
