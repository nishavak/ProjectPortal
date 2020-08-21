import React from "react";
import { Link } from "react-router-dom";
import "./GroupList.scss";
import ReactSearchBox from "react-search-box";
import $ from "jquery";
// import GroupDetails from "./GroupDetails";
import GroupCardView from "./GroupCardView";
import GroupListView from "./GroupListView";
class GroupList extends React.Component {
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
  constructor() {
    super();
    this.state = {
      viewType: "card",
    };
  }
 
  render() {
    return (
      <div className='groups mx-auto' style={{ width: "90%" }}>
        <br />
        {/* <div className = "container-fluid bg-primary">
          abc
        </div> */}
        <div
          className='p-2   text-center shadow-sm rounded font-weight-bold  mx-auto'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Select Group
        </div>
        <div className='d-flex my-4 '>
          <div className=' col-9 '>
            <ReactSearchBox
              placeholder='Search for groups here ...'
              data={this.data}
              autoFocus='true'
              inputBoxBorderColor='#e1e6e2'
              callback={(record) => console.log(record)}
            />
          </div>
          {/* toggle view */}

          <div
            className='col-2 d-flex h-100  bg-white shadow-sm rounded p-0   my-auto'
            style={{
              color: "rgb(183, 32, 46)",
              // fontSize: "2.4vw",
              // backgroundColor: "#ccc6c6",
            }}>
            <div
              id='card'
              className='col-6 view-option text-center  bg-light p-1'
              onClick={() => {
                this.setState({ viewType: "card" }, () => {
                  $(".view-option").removeClass("bg-light");
                  $("#" + this.state.viewType).addClass("bg-light");
                });
              }}>
              <i className='fa fa-th ' aria-hidden='true'></i>
            </div>
            <div
              id='list'
              className='col-6  view-option text-center p-1'
              onClick={() => {
                this.setState({ viewType: "list" }, () => {
                  $(".view-option").removeClass("bg-light");
                  $("#" + this.state.viewType).addClass("bg-light");
                });
              }}>
              <i className='fa fa-list' aria-hidden='true'></i>
            </div>
          </div>
        </div>

        {/* toggle view ends here */}
        <div className='p-3'>
          {this.state.viewType === "card" ? (
            <GroupCardView />
          ) : (
            <GroupListView />
          )}
        </div>

        <br />
        <Link to='/groups'>
          <div className='mx-auto back-button p-2 text-center my-4 rounded-lg'>
            <i className='fa fa-arrow-down mr-2' aria-hidden='true' />
            Download
          </div>
        </Link>
      </div>
    );
  }
}
export default GroupList;
