import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthContext from '../../component/AuthProvider';

function UpdateEducation() {
    const { id } = useParams();
    const navigate = useHistory();
    const emailRef = useRef();
    const [data, setData] = useState([]);
    const [school_name, setName] = useState();
    const [certificate, setCert] = useState();
    const [date_obtained, setDate] = useState();
    const { setAuth } = useContext(AuthContext);
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:5000/education/' + id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:5000/education/' + id, JSON.stringify({ school_name, certificate, date_obtained }), {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true,
        });
        setAuth({ school_name });
        setCert({ certificate });
        setDate({ date_obtained });
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Update Education</h1>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label htmlFor="school_name">School Name: </label>
                        <input type="text" name="school_name" ref={emailRef} onChange={(e) => setName(e.target.value)} value={school_name} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="certificate">Certificate: </label>
                        <input type="text" name="certificate" onChange={(e) => setCert(e.target.value)} value={certificate} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="date_obtained">Date Obtained: </label>
                        <input type="text" name="date_obtained" onChange={(e) => setDate(e.target.value)} value={date_obtained} />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEducation;
