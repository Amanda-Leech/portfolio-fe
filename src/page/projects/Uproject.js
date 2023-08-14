import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthContext from '../../component/AuthProvider';

function UpdateProject() {
    const { id } = useParams();
    const navigate = useHistory();
    const emailRef = useRef();
    const [data, setData] = useState([]);
    const [project_title, setUser] = useState();
    const [project_url, setUrl] = useState();
    const [git_url, setGit] = useState();
    const [project_info, setInfo] = useState();
    const { setAuth } = useContext(AuthContext);
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:5000/project/' + id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:5000/project/' + id, JSON.stringify({ project_title, project_url, git_url, project_info }), {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true,
        });
        setAuth({ project_title });
        setUrl({ project_url });
        setGit({ git_url });
        setInfo({ project_info });
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Update Project</h1>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label htmlFor="project_title">Project Title: </label>
                        <input type="text" name="project_title" ref={emailRef} onChange={(e) => setUser(e.target.value)} value={project_title} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="project_url">Project URL: </label>
                        <input type="text" name="project_url" onChange={(e) => setUrl(e.target.value)} value={project_url} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="git_url">Git URL: </label>
                        <input type="text" name="git_url" onChange={(e) => setGit(e.target.value)} value={git_url} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="project_info">Project Info: </label>
                        <input type="text" name="project_info" onChange={(e) => setInfo(e.target.value)} value={project_info} />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProject;
