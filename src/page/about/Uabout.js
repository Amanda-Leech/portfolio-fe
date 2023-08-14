import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthContext from '../../component/AuthProvider';

function UpdateAbout() {
    const { id } = useParams();
    const navigate = useHistory();
    const emailRef = useRef();
    const [data, setData] = useState([]);
    const [about_title, setTitle] = useState();
    const [about_info, setInfo] = useState();
    const { setAuth } = useContext(AuthContext);
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:5000/about/' + id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:5000/about/id/' + id, JSON.stringify({ about_title, about_info }), {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true,
        });
        setAuth({ about_title });
        setInfo({ about_info });
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Update About</h1>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label htmlFor="about_title">Title: </label>
                        <input type="text" name="about_title" ref={emailRef} onChange={(e) => setTitle(e.target.value)} value={about_title} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="about_info">Body: </label>
                        <input type="text" name="about_info" onChange={(e) => setInfo(e.target.value)} value={about_info} />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateAbout;
