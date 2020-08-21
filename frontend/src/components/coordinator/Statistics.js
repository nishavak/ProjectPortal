import React from "react";
import "./Statistics.scss";
import { Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";

class Statistics extends React.Component {
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
      <div className='statistics mx-auto' style={{ width: "90%" }}>
        <br />
        <div
          className=' p-2 text-center shadow-sm rounded font-weight-bold  mx-auto'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Summary Statistics
        </div>
        <div className='my-4'>
          <ReactSearchBox
            placeholder='Search here ...'
            data={this.data}
            autoFocus='true'
            inputBoxBorderColor='#e1e6e2'
            callback={(record) => console.log(record)}
          />
        </div>

        <div class='table-responsive-sm'>
          <table class='ui striped table'>
            <thead class='text-center'>
              <tr class=''>
                <th class='' scope='col'>
                  Assignment Title{" "}
                  <i className='fa fa-arrow-right mr-2' aria-hidden='true' />
                </th>
                <th class='' scope='col'>
                  Problem Statement
                </th>
                <th class='' scope='col'>
                  Literature Survey
                </th>
                <th class='' scope='col'>
                  Code Part 1
                </th>
                <th class='' scope='col'>
                  Code Part 2
                </th>
                <th class='' scope='col'>
                  Report
                </th>
              </tr>
            </thead>
            <tbody class='text-center'>
              <tr class=''>
                <td class=''>Group no. 1</td>
                <td class=''>Graded</td>
                <td class=''>Graded</td>
                <td class=''>Graded</td>
                <td class=''>Graded</td>
                <td class=''>Graded</td>
              </tr>
              <tr class=''>
                <td class=''>Group no. 2</td>
                <td class=''>Graded</td>
                <td class=''>Graded</td>
                <td class=''>Graded</td>
                <td class=''>Graded</td>
                <td class=''>Graded</td>
              </tr>
              <tr class=''>
                <td class=''>Group no. 3</td>
                <td class=''>Ungraded</td>
                <td class=''>Ungraded</td>
                <td class=''>Graded</td>
                <td class=''>Ungraded</td>
                <td class=''>Not Submitted</td>
              </tr>
              <tr class=''>
                <td class=''>Group no. 4</td>
                <td class=''>Ungraded</td>
                <td class=''>Ungraded</td>
                <td class=''>Not Submitted</td>
                <td class=''>Not Submitted</td>
                <td class=''>Not Submitted</td>
              </tr>
              <tr class=''>
                <td class=''>Group no. 5</td>
                <td class=''>Ungraded</td>
                <td class=''>Ungraded</td>
                <td class=''>Not Submitted</td>
                <td class=''>Not Submitted</td>
                <td class=''>Not Submitted</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to='/projects'>
          <div className='mx-auto back-button p-2 text-center my-4 rounded-lg'>
            <i className='fa fa-arrow-down mr-2' aria-hidden='true' />
            Download
          </div>
        </Link>
      </div>
    );
  }
}

export default Statistics;
