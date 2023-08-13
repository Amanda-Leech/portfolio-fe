import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/project`).then((res) => {
            const projects = res.data;
            this.setState({ projects });
        });
    }

    render() {
        return (
            <ul>
                <h1> Delete Projects </h1>
                <br />
                <br />
                <br />
                {this.state.projects.map((project) => (
                    <li key={project.project_id}>
                        <p> Title: {project.project_title}</p>
                        <p> URL: {project.project_url}</p>
                        <a href={project.git_url}> Git URL: {project.git_url}</a>
                        <p> Info: {project.project_info}</p>
                        <button>Delete</button>
                        <br />
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        );
    }
}
