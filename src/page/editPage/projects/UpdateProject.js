import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateProject() {
    const { id } = useParams();
    const navigate = useHistory();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/project/' + id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [id]);
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     axios.put('http://localhost:5000/project/' + id, data).then((res) => {
    //         alert('Update Successful!');
    //         navigate('/');
    //     });
    // }
    function handleSubmit(event) {
        event.preventDefault();
        axios
            .put('http://localhost:5000/project/' + id, JSON.stringify({ data }), {
                headers: { 'Content-Type': 'application/json' },
                // withCredentials: true,
            })
            .then((res) => {
                alert('Update Successful!');
                // navigate('/');
            });
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Update Project</h1>
                    <br />
                    <br />
                    {/* <div>
                        <label htmlFor="project_id">ID: </label>
                        <input type="text" disabled name="project_id" value={data.project_id} className="form-control" />
                    </div> */}
                    <br />
                    <div>
                        <label htmlFor="project_title">Project Title: </label>
                        <input type="text" name="project_title" value={data.project_title} /> className="form-control" onChange={(e) => setData({ ...data, project_title: e.target.ariaValueNow })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="project_url">Project URL: </label>
                        <input type="text" name="project_url" value={data.project_url} className="form-control" onChange={(e) => setData({ ...data, project_url: e.target.ariaValueNow })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="git_url">Git URL: </label>
                        <input type="text" name="git_url" value={data.project_url} className="form-control" onChange={(e) => setData({ ...data, git_url: e.target.ariaValueNow })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="project_info">Project Info: </label>
                        <input type="text" name="project_info" value={data.project_url} className="form-control" onChange={(e) => setData({ ...data, project_info: e.target.ariaValueNow })} />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProject;
