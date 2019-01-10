import React from "react";
import axios from "axios";

class Project extends React.Component {
  state = {};

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { project } = this.state;
    console.log(project);
    return <div>{project && <h3>{project.name}</h3>}</div>;
  }
}

export default Project;
