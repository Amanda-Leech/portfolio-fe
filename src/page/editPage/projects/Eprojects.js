import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

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
                <h1> Projects </h1>
                <br />
                <div className="text-end">
                    <Link to="/AddProject" className="btn btn-primary">
                        Add Project
                    </Link>
                </div>
                <br />
                {this.state.projects.map((project) => (
                    <li key={project.project_id}>
                        <p> Title: {project.project_title}</p>
                        <p> URL: {project.project_url}</p>
                        <a href={project.git_url}> Git URL: {project.git_url}</a>
                        <p> Info: {project.project_info}</p>
                        <p>
                            <Link to={`/project/${project.project_id}`} className="btn btn-success">
                                Update
                            </Link>
                            {'  '}/{'  '}
                            <Link to={`project/delete/${project.project_id}`} className="btn btn-danger">
                                Delete
                            </Link>
                        </p>
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        );
        // function handleSubmit(id) {
        //         const conf = window.confirm('Are you sure?');
        //         if (conf) {
        //             axios
        //                 .delete('/project/delete/' + id)
        //                 .then((res) => {
        //                     alert('Deleted');
        //                     navigate('/');
        //                 })
        //                 .catch((err) => console.log(err));
        //     }
        // }
    }
}
