import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import ProjectList from "./components/ProjectList";
import Project from "./components/Project";
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
        <h1>Node and Express Challenge</h1>
        <Route exact path="/" render={props => <ProjectList {...props} projects={projects} />} />
        <Route exact path="/projects/:id" render={props => <Project {...props} />} />
      </div>
    );
  }
}

export default App;
