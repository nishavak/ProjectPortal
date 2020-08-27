import React from "react";
import GuideGroupCard from "./GuideGroupCard";
import Loading from "../shared/Loading";
import GuideHeader from "./GuideHeader";
import axios from "../../axios";
import $ from "jquery";
import { Route } from "react-router-dom";

class GuideDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: [],
      loading: true,
      category: "all",
    };
    this.guide_data = [];
  }

  componentDidMount(){
    axios
      .get(`guideDashboard/`)
      .then(({ data }) => {
        this.guide_data = data.group_info;
        this.state.loading = false;
        this.setState({});
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div>
        <Route component={GuideHeader} />
        <div className="row container-fluid m-0 justify-content-center">
        {this.guide_data.length && this.guide_data.map((team) => (
          <Route render={(props) =>
          <GuideGroupCard {...props}
            groupId={team.id}
            groupLeader={team.leader_name}
            numOfMembers={team.member_count}
            domain={team.domain}
          />
          }
          />
          ))}

        </div>
      </div>
    );
  }
}

export default GuideDashboard;
