import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddProject() {
    const [inputData, setInputData] = useState({ project_title: '', project_url: '', git_url: '', project_info: '' });
    const navigate = useHistory();
    function handleSubmit(event) {
        event.preventDefault();

        axios
            .post('http://localhost:5000/project', inputData)
            .then((res) => {
                alert('Project added successfully!');
                navigate('/Project');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Add Project</h1>
                    <br />
                    <br />
                    <div>
                        <label htmlFor="project_title">Project Title: </label>
                        <input type="text" name="project_title" className="form-control" onChange={(e) => setInputData({ ...inputData, project_title: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="project_url">Project URL: </label>
                        <input type="texy" name="project_url" className="form-control" onChange={(e) => setInputData({ ...inputData, project_url: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="git_url">Git URL: </label>
                        <input type="text" name="git_url" className="form-control" onChange={(e) => setInputData({ ...inputData, git_url: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="project_info">Project Info: </label>
                        <input type="text" name="project_info" className="form-control" onChange={(e) => setInputData({ ...inputData, project_info: e.target.value })} />
                    </div>
                    <br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddProject;
