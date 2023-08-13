import React, { useState } from 'react';
import axios from 'axios';

function AddProject() {
    const [post, setPost] = useState({
        project_title: '',
        project_url: '',
        git_url: '',
        project_info: '',
    });
    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };
    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/project`, { post })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    }
    return (
        <div className="form-container">
            <h1>Add Project</h1>
            <br />
            <br />
            <div className="form-input">
                <form onSubmit={handleSubmit}>
                    Title: <input type="text" onChange={handleInput} name="project_title"></input>
                    <br />
                    <br />
                    URL: <input type="text" onChange={handleInput} name="project_url"></input>
                    <br />
                    <br />
                    Git: <input type="text" onChange={handleInput} name="git_url"></input>
                    <br />
                    <br />
                    Info: <input type="text" onChange={handleInput} name="project_info"></input>
                    <br />
                    <br />
                    <button className="btn btn-primary">Submit</button>
                    {/* <button className="btn btn-secondary">Logout</button> */}
                </form>
            </div>
        </div>
    );
}

export default AddProject;
