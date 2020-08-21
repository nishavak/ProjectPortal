import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import "./GradingStatistics.scss";
class GradingStats extends Component {
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
      <div className='grading-stats mx-auto' style={{ width: "90%" }}>
        <br />
        <div
          className='p-2 px-3 text-center shadow-sm rounded font-weight-bold'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Grading Statistics
        </div>

        <br />
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
                <td class=''>1814033</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
              </tr>
              <tr class=''>
                <td class=''>1814033</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
              </tr>
              <tr class=''>
                <td class=''>1814033</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
              </tr>
              <tr class=''>
                <td class=''>1814033</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
              </tr>
              <tr class=''>
                <td class=''>1814033</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
                <td class=''>23</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to='/grade-statistics'>
          <div className='mx-auto back-button p-2 text-center my-4 rounded-lg'>
            <i className='fa fa-arrow-down mr-2' aria-hidden='true' />
            Download
          </div>
        </Link>
      </div>
    );
  }
}

export default GradingStats;
