import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthContext from '../../component/AuthProvider';

function UpdateCover() {
    const { id } = useParams();
    const navigate = useHistory();
    const emailRef = useRef();
    const [data, setData] = useState([]);
    const [cover_title, setTitle] = useState();
    const [cover_info, setInfo] = useState();
    const { setAuth } = useContext(AuthContext);
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:5000/cover/id/' + id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:5000/cover/' + id, JSON.stringify({ cover_title, cover_info }), {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true,
        });
        setAuth({ cover_title });
        setInfo({ cover_info });
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Update Cover</h1>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label htmlFor="cover_title">Title: </label>
                        <input type="text" name="cover_title" ref={emailRef} onChange={(e) => setTitle(e.target.value)} value={cover_title} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="cover_info">Body: </label>
                        <input type="text" name="cover_info" onChange={(e) => setInfo(e.target.value)} value={cover_info} />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateCover;
