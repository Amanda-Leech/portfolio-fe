import React from 'react';
import axios from 'axios';

const Project = () => {
    if (axios.get(`http://localhost:5000/user/me`)) {
        <h1>Logged in about me</h1>;
    } else {
        <h1>Not Logged in about me</h1>;
    }
};

export default Project;

// export default class PersonList extends React.Component {
//     state = {
//         projects: [],
//     };

//     componentDidMount() {
//         axios.get(`http://localhost:5000/project`).then((res) => {
//             const projects = res.data;
//             this.setState({ projects });
//         });
//     }

//     render() {
//         return (
//             <ul>
//                 <h1>Projects</h1>
//                 <br />
//                 <br />
//                 {this.state.projects.map((project) => (
//                     <li key={project.project_id}>
//                         <p> Title: {project.project_title}</p>
//                         <p>URL: {project.project_url}</p>
//                         <p>GIT: {project.git_url}</p>
//                         <p>Info: {project.project_info}</p>
//                         <br />
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }
