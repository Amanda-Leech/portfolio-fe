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
                PROJECTS
                <p>----------</p>
                {this.state.projects.map((project) => (
                    <li key={project.project_id}>
                        <p> Title: {project.project_title}</p>
                        <p>URL: {project.project_url}</p>
                        <p>GIT: {project.git_url}</p>
                        <p>Info: {project.project_info}</p>
                    </li>
                ))}
            </ul>
        );
    }
}
