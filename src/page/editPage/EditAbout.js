import React, { useState } from 'react';
import axios from 'axios';

function EditAbout() {
    const [post, setPost] = useState({
        about_title: '',
        about_info: '',
    });
    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };
    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/about`, { post })
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
                    Title: <input type="text" onChange={handleInput} name="about_title"></input>
                    <br />
                    <br />
                    Info: <input type="text" onChange={handleInput} name="about_info"></input>
                    <br />
                    <br />
                    <button className="btn btn-primary">Submit</button>
                    <button className="btn btn-secondary">Logout</button>
                </form>
            </div>
        </div>
    );
}

export default EditAbout;
