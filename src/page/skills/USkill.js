import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthContext from '../../component/AuthProvider';

function UpdateProject() {
    const { id } = useParams();
    const navigate = useHistory();
    const emailRef = useRef();
    const [data, setData] = useState([]);
    const [skill_name, setSkill] = useState();
    const [skill_use, setUse] = useState();
    const { setAuth } = useContext(AuthContext);
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:5000/skill/' + id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:5000/skill/' + id, JSON.stringify({ skill_name, skill_use }), {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true,
        });
        setAuth({ skill_name });
        setUse({ skill_use });
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Update Skill</h1>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label htmlFor="skill_name">Project Title: </label>
                        <input type="text" name="skill_name" ref={emailRef} onChange={(e) => setSkill(e.target.value)} value={skill_name} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="skill_use">Project URL: </label>
                        <input type="text" name="skill_use" onChange={(e) => setUse(e.target.value)} value={skill_use} />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProject;
