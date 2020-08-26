import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./GuideList.scss";
import axios from "../../axios";
import saveCsv from "save-csv/save-csv.min.js";
import Loading from "../shared/Loading";

class Guide extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.guides = [];
    this.team_ids = [];
    this.downloadable = [];
  }
  componentDidMount() {
    axios.get("coordinatorGuide/").then(({ data }) => {
      console.table(data);
      this.guides = data;
      this.guides.forEach((guide) => {
        if (guide.team_data.length != 0) {
          guide.team_data.forEach((team) => {
            this.team_ids.push(team.team_id);
            console.log("inside team" + team.team_id);
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
      this.setState({ loading: false });
    });
  }
  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="guide mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)",
          }}
        >
          Guide List
        </div>
        <div className=" d-flex flex-md-row flex-column justify-content-between mx-auto mt-4 p-0">
          <div className="col-md-3 col-12 text-center p-0 my-1">
            <Link to="/guide-detailed" className="d-flex justify-content-start">
              <div className="btn btn-danger" style={{ marginBottom: "1em" }}>
                {/* <i className="fa fa-list mr-2" aria-hidden="true" /> */}
                Detailed List
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
                  Faculty Name
                </th>
                <th class="" scope="col">
                  Group Numbers
                </th>
                <th class="" scope="col">
                  Department
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              {this.guides.map((guide) => {
                return (
                  <tr
                    class=""
                    onClick={() =>
                      this.props.history.push(`/guide/${guide.guide_id}`)
                    }
                  >
                    <td class="">{guide.guide_name}</td>

                    <td class="">
                      {guide.team_data.length &&
                        guide.team_data.map((team) => {
                          return <span>{team.team_id},</span>;
                        })}
                    </td>
                    <td class="">{guide.guide_branch}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
            {/* <i className="fa fa-arrow-down mr-2" /> */}
            Download
          </div>
        </div>
      </div>
    );
  }
}
export default Guide;
