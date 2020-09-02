import React from "react";
import $ from "jquery";
import "./GroupSection.scss";
import axios from "../../axios";
import UserImage from "../../assets/images/User.png";
import Loading from "../shared/Loading";

class GroupSection extends React.Component {
  constructor(props) {
    super(props);
    this.team_data = {};
    this.image = null;
    this.id = this.props.match.params.id;
    this.state = { loading: true };
  }

  componentDidMount() {
    axios
      .get(`guideGroup/${this.id}/`)
      .then(({ data }) => {
        this.team_data = data;
        this.setState({ loading: false });
      })
      .catch((err) => this.props.history.goBack());

    axios.get("getImage/").then(({ data }) => {
      this.image = data;
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="group-container">
        <div className="group-section container  p-0">
          <div
            className="bg-light p-2 px-3 text-center shadow-sm rounded font-weight-bold"
            style={{ color: "#5b9ecf", fontSize: "1.1em" }}
          >
            Group Details
          </div>
          <div className="mt-3 bg-light rounded">
            <div
              className="info-section p-3 border-light"
              style={{ letterSpacing: "0.1em" }}
            >
              <div>
                <p
                  className="text-muted mb-1"
                  style={{ fontSize: "1.3em", fontWeight: "550" }}
                >
                  Group Id{" "}
                </p>
                <p style={{ fontSize: "1.1em" }}>
                  {this.team_data && this.team_data.team_id}
                </p>
              </div>
              <hr />
              <div style={{}}>
                <p
                  className="text-muted mb-1"
                  style={{ fontSize: "1.3em", fontWeight: "550" }}
                >
                  Group Leader{" "}
                </p>
                <p style={{ fontSize: "1.1em" }}>
                  {this.team_data && this.team_data.leader}
                </p>
              </div>
              <hr />

              <p
                className="text-muted mb-1"
                style={{ fontSize: "1.3em", fontWeight: "550" }}
              >
                Group Members{" "}
              </p>
              <p style={{ fontSize: "1.1em" }} />
            </div>
          </div>
          {this.team_data.students &&
            this.team_data.students.map((student) => (
              <>
                <div className="bg-light mt-3 p-0 rounded">
                  <div className="d-flex flex-md-row flex-column  p-2">
                    <div className="col-md-6 col-12  ">
                      <p>
                        <b>Roll Number:</b> {student.student_roll_number}
                        <br />
                        <b>Name:</b> {student.student_name}
                        <br />
                        <b>Email ID:</b> {student.student_email}
                        <br />
                        <b>Branch:</b> {student.student_branch}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}

          {!$.isEmptyObject(this.team_data.project) ? (
            <div className="text-center p-3">
              <button
                className="btn btn-info"
                onClick={() => {
                  window.location.href = `/profile/project-section/${this.team_data.team_id}/`;
                }}
              >
                View Project Details
              </button>
            </div>
          ) : (
            "This group hasn't registered the project yet "
          )}
        </div>
      </div>
    );
  }
}
export default GroupSection;
