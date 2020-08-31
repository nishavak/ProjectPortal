import React from "react";
import { Route, Link } from "react-router-dom";
import GuideHeader from "./GuideHeader";
import axios from "../../axios";
import Loading from "../shared/Loading";

export default class GuideRequest extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
    this.state = {
      status: "",
      loading: true,
    };
  }
  componentDidMount() {
    axios
      .get("guideRequest/")
      .then(({ data }) => {
        this.data = data;
        this.setState({ loading: false });
      })
      .catch((err) => this.props.history.goBack());
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <>
        <Route component={GuideHeader} />
        <div className='guide-requests mx-auto' style={{ width: "90%" }}>
          <br />
          <div
            className='p-2 text-center shadow-sm rounded font-weight-bold  mx-auto'
            style={{
              color: "rgb(183, 32, 46)",
              fontSize: "1.1em",
              backgroundColor: "rgba(231, 231, 231, 0.459)",
            }}>
            Approval Requests
          </div>
          <br />
          {this.data ? (
            <div id='card' className='slide-in-bottom'>
              <div className='card shadow-sm my-4'>
                <div className='card-header'>
                  <b>Group Id :</b> {this.data.team_id}
                </div>
                <div className='card-body'>
                  <div className='d-flex flex-xl-row flex-column'>
                    <div className='col d-flex justify-content-between m-0 p-0'>
                      <b>Group Leader:</b>
                      <div>{this.data.leader}</div>
                    </div>
                    <div className='col d-flex justify-content-between m-0 p-0 px-xl-5'>
                      <Link to={`/group/${this.data.team_id}`}>
                        <div className='text-primary'>View Group Details</div>
                      </Link>
                    </div>
                    <div className='col d-flex justify-content-between m-0 p-0'>
                      <Link to={`/project/${this.data.project}`}>
                        <div className='text-primary'>View Project Details</div>
                      </Link>
                    </div>
                  </div>
                  <div className='d-flex flex-xl-row flex-column'>
                    <button
                      type='button'
                      class='btn btn-outline-success'
                      onClick={() => {
                        this.setState({ status: "A" });
                      }}>
                      Accept
                    </button>
                    <button
                      type='button'
                      class='btn btn-outline-danger'
                      onClick={() => {
                        this.setState({ status: "R" });
                      }}>
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "No requests"
          )}
        </div>
      </>
    );
  }
}
