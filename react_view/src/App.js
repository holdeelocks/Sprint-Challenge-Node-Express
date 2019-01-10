import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import ProjectList from "./components/ProjectList";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/projects")
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { projects } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <Route exact path="/" render={props => <ProjectList {...props} projects={projects} />} />
      </div>
    );
  }
}

export default App;
