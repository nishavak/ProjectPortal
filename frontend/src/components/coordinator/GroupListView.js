import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export class GroupListView extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
  }
  detailInfo = () => {
    this.setState({ redirect: "/group/:id" });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div class='table-responsive'>
        <table class='ui striped table'>
          <thead class='text-center'>
            <tr class=''>
              <th class='' scope='col'>
                Group Id
              </th>
              <th class='' scope='col'>
                Project Name
              </th>
              <th class='' scope='col'>
                Member Count
              </th>
              <th class='' scope='col'>
                Guide Name
              </th>
              <th class='' scope='col'>
                Project Type
              </th>
              <th class='' scope='col'>
                Leader Name
              </th>
            </tr>
          </thead>
          <tbody class='text-center'>
            <tr class='' onClick={this.detailInfo}>
              <td class=''>1</td>
              <td class=''>ABC</td>
              <td class=''>3</td>
              <td class=''>DEF</td>
              <td class=''>Inter-disciplinary</td>
              <td class=''>GHI</td>
            </tr>
            <tr class='' onClick={this.detailInfo}>
              <td class=''>1</td>
              <td class=''>ABC</td>
              <td class=''>3</td>
              <td class=''>DEF</td>
              <td class=''>Inter-disciplinary</td>
              <td class=''>GHI</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GroupListView;
