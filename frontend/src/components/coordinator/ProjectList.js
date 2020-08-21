import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./ProjectList.scss";
import ReactSearchBox from "react-search-box";

class ProjectList extends React.Component {
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
    this.setState({ redirect: "/project/:id" });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className='project mx-auto' style={{ width: "90%" }}>
        <br />
        <div
          className='p-2 px-3 text-center shadow-sm rounded font-weight-bold'
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}>
          Project List
        </div>
        <div className='my-4'>
          <ReactSearchBox
            placeholder='Search for projects here ...'
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
                  Project Name
                </th>
                <th class='' scope='col'>
                  Guide Name
                </th>
                <th class='' scope='col'>
                  Group Number
                </th>
                <th class='' scope='col'>
                  Domain
                </th>
              </tr>
            </thead>
            <tbody class='text-center'>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>Smart Cities Mission</td>
                <td class=''>ABCD</td>
                <td class=''>5</td>
                <td class=''>AI</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>Smart India</td>
                <td class=''>ABC</td>
                <td class=''>1</td>
                <td class=''>AI</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>Project India</td>
                <td class=''>AB</td>
                <td class=''>3</td>
                <td class=''>NS</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>Smart Cities Mission</td>
                <td class=''>ABCD</td>
                <td class=''>5</td>
                <td class=''>AI</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>Smart India</td>
                <td class=''>ABC</td>
                <td class=''>1</td>
                <td class=''>AI</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>Project India</td>
                <td class=''>AB</td>
                <td class=''>3</td>
                <td class=''>AI</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>Smart Cities Mission</td>
                <td class=''>ABCD</td>
                <td class=''>5</td>
                <td class=''>AI</td>
              </tr>
              <tr class='' onClick={this.detailInfo}>
                <td class=''>Smart India</td>
                <td class=''>ABC</td>
                <td class=''>1</td>
                <td class=''>AI</td>
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
export default ProjectList;
