import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthContext from '../../component/AuthProvider';

function UpdateAbout() {
    const { id } = useParams();
    const navigate = useHistory();
    const emailRef = useRef();
    const [data, setData] = useState([]);
    const [contact_name, setName] = useState();
    const [linked_id, setLinked] = useState();
    const [git_hub, setGit] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const { setAuth } = useContext(AuthContext);
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:5000//contact/id/' + id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:5000/contact/' + id, JSON.stringify({ contact_name, linked_id, git_hub, phone, email, address }), {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true,
        });
        setAuth({ contact_name });
        setLinked({ linked_id });
        setGit({ git_hub });
        setPhone({ phone });
        setEmail({ email });
        setAddress({ address });
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Update Contact</h1>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label htmlFor="contact_name">Name: </label>
                        <input type="text" name="contact_name" ref={emailRef} onChange={(e) => setName(e.target.value)} value={contact_name} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="linked_id">LinkedIn: </label>
                        <input type="text" name="linked_id" onChange={(e) => setLinked(e.target.value)} value={linked_id} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="git_hub">Git Hub: </label>
                        <input type="text" name="git_hub" onChange={(e) => setGit(e.target.value)} value={git_hub} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="address">Address: </label>
                        <input type="text" name="address" onChange={(e) => setLinked(e.target.value)} value={address} />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateAbout;
