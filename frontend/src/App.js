import $ from "jquery";
import React, { Component } from "react";
import axios from "./axios";
import Error from "./components/shared/Error";
import Loading from "./components/shared/Loading";
import Assistant from "./routes/Assistant";
import Authentication from "./routes/Authentication";
import Coordinator from "./routes/Coordinator";
import Guide from "./routes/Guide";
import Student from "./routes/Student";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.__userType = null;
    this.__authenticated = false;
  }

  componentDidMount() {
    $(function () {
      $().button("toggle");
    });
    axios
      .get("whoAmI/")
      .then(({ data }) => {
        this.__userType = data;
        this.__authenticated = true;
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) return <Loading />;
    if (!this.__authenticated) return <Authentication />;
    else {
      if (this.__userType === "student") return <Student />;
      else if (this.__userType === "coordinator") return <Coordinator />;
      else if (this.__userType === "assistant") return <Assistant />;
      else if (this.__userType === "guide") return <Guide />;
      else return <Error />;
    }
  }
}
