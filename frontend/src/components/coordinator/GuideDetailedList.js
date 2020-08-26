import React from "react";
import "./GuideDetailedList.scss";
import { Link } from "react-router-dom";
import axios from "../../axios";
import saveCsv from "save-csv/save-csv.min.js";

class GuideDetailedList extends React.Component {
  constructor(props) {
    super(props);
    this.guides = [];
    this.downloadable = [];
  }
  componentDidMount() {
    axios.get("coordinatorGuide/").then(({ data }) => {
      this.guides = data;
      this.guides.forEach((guide) => {
        if (guide.team_data.length != 0) {
          guide.team_data.forEach((team) => {
            this.downloadable.push({
              guide_id: guide.guide_id,
              guide_name: guide.guide_name,
              guide_branch: guide.guide_branch,
              team_id: team.team_id,
              project_id: team.project_id,
              project_title: team.project_title,
            });
          });
        } else {
          this.downloadable.push({
            guide_id: guide.guide_id,
            guide_name: guide.guide_name,
            guide_branch: guide.guide_branch,
            team_id: null,
            project_id: null,
            project_title: null,
          });
        }
      });

      console.log(this.downloadable);
      this.setState({});
    });
  }

  render() {
    return (
      <div className="detailed-list mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Guide Detailed List
        </div>
        <div className=" d-flex flex-md-row flex-column justify-content-between mx-auto mt-4 p-0">
          <div className="col-md-3 col-12 text-center p-0 my-1">
            <Link to="/guides">
              <div
                className="back-button rounded-lg py-2 px-0 mx-auto"
                style={{ marginBottom: "1em" }}
              >
                <i className="fa fa-list mr-2" aria-hidden="true" />
                Back to Normal List
              </div>
            </Link>
          </div>
        </div>
        <div class="table-responsive-sm">
          <table class="ui striped table">
            <thead
              class="text-center"
              style={{ fontFamily: `'Courier New', Courier, monospace` }}
            >
              <tr class="">
                <th class="" scope="col">
                  Id
                </th>
                <th class="" scope="col">
                  Name
                </th>
                <th class="" scope="col">
                  Branch
                </th>
                <th class="" scope="col">
                  Group Number
                </th>

                <th class="" scope="col">
                  Project Title
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              {this.guides.map((guide) => {
                if (guide.team_data.length !== 0) {
                  return guide.team_data.map((team) => {
                    return (
                      <tr
                        class=""
                        onClick={() =>
                          this.props.history.push(`/guide/${guide.guide_id}`)
                        }
                      >
                        <td class="">{guide.guide_id}</td>
                        <td class="">{guide.guide_name}</td>
                        <td class="">{guide.guide_branch}</td>
                        <td class="">{team.team_id}</td>
                        <td class="">{team.project_title || "-"}</td>
                      </tr>
                    );
                  });
                } else {
                  return (
                    <tr
                      class=""
                      onClick={() =>
                        this.props.history.push(`/guide/${guide.guide_id}`)
                      }
                    >
                      <td class="">{guide.guide_id}</td>
                      <td class="">{guide.guide_name}</td>
                      <td class="">{guide.guide_branch}</td>
                      <td class="">-</td>
                      <td class="">-</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          <hr />
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div
            className="btn btn-danger"
            onClick={() =>
              saveCsv(this.downloadable, {
                filename: "guide-list.csv",
              })
            }
          >
            <i className="fa fa-arrow-down mr-2" />
            Download
          </div>
        </div>
      </div>
    );
  }
}

export default GuideDetailedList;
