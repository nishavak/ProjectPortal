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

  componentDidMount() {
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
        {this.guide_data.length ? (
          <div className='d-flex flex-md-row flex-column justify-text-center'>
            {this.guide_data.map((team) => (
              <Route
                render={(props) => (
                  <GuideGroupCard
                    {...props}
                    groupId={team.id}
                    groupLeader={team.leader_name}
                    numOfMembers={team.member_count}
                    domain={team.domain}
                  />
                )}
              />
            ))}
          </div>
        ) : (
          <div
            className='container-fluid d-flex flex-column justify-content-center text-center'
            style={{ height: "80vh" }}>
            <h4>Not in any groups yet</h4>
            <p className='text-muted'>Look out for incoming group requests</p>
          </div>
        )}
      </div>
    );
  }
}

export default GuideDashboard;
