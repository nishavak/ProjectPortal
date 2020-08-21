import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./GuideList.scss";
import ReactSearchBox from "react-search-box";

class Guide extends Component {
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
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className='guide mx-auto' style={{ width: "90%" }}>
        <br />
        <div
          className='p-2 px-3 text-center shadow-sm rounded font-weight-bold'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Guide List
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
            <Link to='/users/guide-detailed'>
              <div
                className='back-button rounded-lg py-2 px-0 mx-auto'
                style={{ marginBottom: "1em" }}>
                <i className='fa fa-list mr-2' aria-hidden='true' />
                See Detailed List
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
                  Group Numbers
                </th>
                <th class='' scope='col'>
                  Department
                </th>
              </tr>
            </thead>
            <tbody class='text-center'>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>ABCD</td>
                <td class=''>1 , 2</td>
                <td class=''>IT</td>
              </tr>

              <tr class='' onClick={this.detailInfo}>
                <td class=''>ABC</td>
                <td class=''>3 , 4</td>
                <td class=''>IT</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>AB</td>
                <td class=''>4, 7</td>
                <td class=''>IT</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>A</td>
                <td class=''>10 , 12</td>
                <td class=''>IT</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>ABCD</td>
                <td class=''>1 , 2</td>
                <td class=''>IT</td>
              </tr>

              <tr class='' onClick={this.detailInfo}>
                <td class=''>ABC</td>
                <td class=''>3 , 4</td>
                <td class=''>IT</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>AB</td>
                <td class=''>4, 7</td>
                <td class=''>IT</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>A</td>
                <td class=''>10 , 12</td>
                <td class=''>IT</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>ABCD</td>
                <td class=''>1 , 2</td>
                <td class=''>IT</td>
              </tr>

              <tr class='' onClick={this.detailInfo}>
                <td class=''>ABC</td>
                <td class=''>3 , 4</td>
                <td class=''>IT</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>AB</td>
                <td class=''>4, 7</td>
                <td class=''>IT</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>A</td>
                <td class=''>10 , 12</td>
                <td class=''>IT</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to='/users/guide'>
          <div className='mx-auto p-2 back-button text-center my-5 rounded-lg'>
            <i className='fa fa-arrow-down mr-2' aria-hidden='true' />
            Download
          </div>
        </Link>
      </div>
    );
  }
}
export default Guide;
