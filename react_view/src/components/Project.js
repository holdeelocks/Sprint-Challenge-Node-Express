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
    return (
      <div>
        {project && (
          <>
            <h3>Project: {project.name}</h3>
            <p>Description: {project.description}</p>
            <div>
              <h4>Action(s):</h4>
              {project.actions.map((action, i) => (
                <ul key={i}>
                  <h5>{`Action ${i}`}</h5>
                  <li>{action.description}</li>
                  <li>{action.notes}</li>
                  <li>{action.completed}</li>
                </ul>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Project;
