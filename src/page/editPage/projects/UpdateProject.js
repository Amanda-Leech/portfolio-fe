import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProject() {
    const { project_id } = useParams();
    const [project, setData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/project/' + project_id)
            .then((res) => setData(res.project))
            .catch((err) => console.log(err));
    }, [project_id]);
    // function handleSubmit(event) {
    //   event.preventDefault();

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form>
                    {/* <form onSubmit={handleSubmit}> */}
                    <h1>Add Project</h1>
                    <br />
                    <br />
                    {/* <div>
                        <label htmlFor="project_id">ID: </label>
                        <input type="text" disabled name="project_id" value={project.project_id} className="form-control" />
                    </div> */}
                    <br />
                    <div>
                        <label htmlFor="project_title">Project Title: </label>
                        <input type="text" name="project_title" value={project.project_title} className="form-control" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="project_url">Project URL: </label>
                        <input type="text" name="project_url" value={project.project_url} className="form-control" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="git_url">Git URL: </label>
                        <input type="text" name="git_url" value={project.project_url} className="form-control" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="project_info">Project Info: </label>
                        <input type="text" name="project_info" value={project.project_url} className="form-control" />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProject;
