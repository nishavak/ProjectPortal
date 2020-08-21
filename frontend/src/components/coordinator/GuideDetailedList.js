import React from "react";
import "./GuideDetailedList.scss";
import { Redirect, Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";

class GuideDetailedList extends React.Component {
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
  constructor(props) {
    super(props);
    this.state = { redirect: null };
  }
  detailInfo = () => {
    this.setState({ redirect: "/users/guide/:id" });
    // window.location.href = "/users/guide/:id";
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className='detailed-list mx-auto' style={{ width: "90%" }}>
        <br />
        <div
          className='p-2 px-3 text-center shadow-sm rounded font-weight-bold'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Guide Detailed List
        </div>
        <div className=' d-flex flex-md-row flex-column justify-content-between mx-auto mt-4 p-0'>
          <div className='col-md-7 col-12 p-0 pl-2 my-1 '>
            <ReactSearchBox
              placeholder='Search for assignments here ...'
              data={this.data}
              autoFocus='true'
              inputBoxBorderColor='#e1e6e2'
              callback={(record) => console.log(record)}
            />
          </div>
          <div className='col-md-3 col-12 text-center p-0 my-1'>
            <Link to='/users/guides'>
              <div
                className='back-button rounded-lg py-2 px-0 mx-auto'
                style={{ marginBottom: "1em" }}>
                <i className='fa fa-list mr-2' aria-hidden='true' />
                Back to Normal List
              </div>
            </Link>
          </div>
        </div>
        <div class='table-responsive-sm'>
          <table class='ui striped table'>
            <thead
              class='text-center'
              style={{ fontFamily: `'Courier New', Courier, monospace` }}>
              <tr class=''>
                <th class='' scope='col'>
                  Faculty Name
                </th>
                <th class='' scope='col'>
                  Group Number
                </th>
                <th class='' scope='col'>
                  Project Title
                </th>
                <th class='' scope='col'>
                  Number of Groups
                </th>
              </tr>
            </thead>
            <tbody class='text-center'>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>ABCD</td>
                <td class=''>1</td>
                <td class=''>Smart Cities</td>
                <td class=''>2</td>
              </tr>
              <tr class=''>
                <td class=''>ABCD</td>
                <td class=''>2</td>
                <td class=''>Smart India</td>
                <td class=''>2</td>
              </tr>
              <tr class=''>
                <td class=''>ABCD</td>
                <td class=''>1</td>
                <td class=''>Smart Cities</td>
                <td class=''>2</td>
              </tr>
              <tr class=''>
                <td class=''>ABCD</td>
                <td class=''>2</td>
                <td class=''>Smart India</td>
                <td class=''>2</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
        <Link to='/users/guide-detailed'>
          <div className='mx-auto p-2 back-button text-center my-5 rounded-lg'>
            <i className='fa fa-arrow-down mr-2' aria-hidden='true' />
            Download
          </div>
        </Link>
      </div>
    );
  }
}

export default GuideDetailedList;
