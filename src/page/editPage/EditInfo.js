import React, { useState } from 'react';
import axios from 'axios';

function EditInfo() {
    const [post, setPost] = useState({
        contact_name: '',
        linked_in: '',
        git_hub: '',
        phone: '',
        email: '',
        address: '',
    });
    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };
    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/contact`, { post })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    }
    return (
        <div className="form-container">
            <h1>About me</h1>
            <br />
            <br />
            <div className="form-input">
                <form onSubmit={handleSubmit}>
                    Name: <input type="text" onChange={handleInput} name="contact_name"></input>
                    <br />
                    <br />
                    LinkedIn: <input type="text" onChange={handleInput} name="linked_in"></input>
                    <br />
                    <br />
                    Git hub: <input type="text" onChange={handleInput} name="git_hub"></input>
                    <br />
                    <br />
                    Phone: <input type="text" onChange={handleInput} name="phone"></input>
                    <br />
                    <br />
                    Email: <input type="text" onChange={handleInput} name="email"></input>
                    <br />
                    <br />
                    Address: <input type="text" onChange={handleInput} name="address"></input>
                    <br />
                    <br />
                    <button className="btn btn-primary">Submit</button>
                    <button className="btn btn-secondary">Logout</button>
                </form>
            </div>
        </div>
    );
}

export default EditInfo;
