import React from "react";
import { Link } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import "./AssignmentList.scss";
import ReactSearchBox from "react-search-box";
// docs : https://www.npmjs.com/package/react-search-box
class AssignmentList extends React.Component {
  data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  render() {
    return (
      <div className='assignment-list mx-auto ' style={{ width: "90%" }}>
        <br />
        <div
          className=' p-2   text-center shadow-sm rounded font-weight-bold  mx-auto'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Assignments
        </div>
        <div className=' d-flex  flex-md-row flex-column justify-content-between mx-auto mt-4 p-0'>
          <div className='col-md-8 p-0  my-1  align-self-center'>
            <ReactSearchBox
              placeholder='Search for assignments here ...'
              data={this.data}
              autoFocus='true'
              inputBoxBorderColor='#e1e6e2'
              callback={(record) => console.log(record)}
            />
          </div>
          <div className='col-md-3  text-center align-self-center p-0 my-1'>
            <div class='dropdown '>
              <button
                className='btn  dropdown-toggle'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{
                  backgroundColor: "rgb(183, 32, 46)",
                  color: "white",
                  outline: "0",
                  boxShadow: "none",
                }}>
                Actions
              </button>
              <div
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton'>
                <Link className='dropdown-item' to='/create-assignments'>
                  Create Assignment
                </Link>

                <Link className='dropdown-item' to='/submission-statistics'>
                  Submission Stats
                </Link>

                <Link className='dropdown-item' to='/grade-statistics'>
                  Grading Stats
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='p-2'>
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
        </div>
      </div>
    );
  }
}
export default AssignmentList;
