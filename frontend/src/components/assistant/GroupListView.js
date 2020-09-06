import React, { Component } from "react";

export class GroupListView extends Component {
  render() {
    return (
      <div class="table-responsive">
        <table class="ui striped table">
          <thead class="text-center">
            <tr class="">
              <th class="" scope="col">
                Group Number
              </th>
              <th class="" scope="col">
                Project Name
              </th>
              <th class="" scope="col">
                Member Count
              </th>
              <th class="" scope="col">
                Guide Name
              </th>
              <th class="" scope="col">
                Project Type
              </th>
              <th class="" scope="col">
                Leader Name
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            {this.props.data &&
              this.props.data.map((team) => {
                return (
                  <tr
                    class=""
                    onClick={() =>
                      this.props.history.push(`/group/${team.team_id}`)
                    }
                  >
                    <td class="">{team.team_id}</td>
                    <td class="">{team.project_data.project_name || "-"}</td>
                    <td class="">{team.student_data.length}</td>
                    <td class="">{team.guide_data.guide_name || "-"}</td>
                    <td class="">{team.project_data.project_type || "-"}</td>
                    <td class="">{team.leader_name || "-"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GroupListView;
