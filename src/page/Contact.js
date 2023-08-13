import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [post, setPost] = useState({
        message_name: '',
        message_email: '',
        message_subject: '',
        message: '',
    });
    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };
    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/contact/Amanda_Leech`, { post })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    }
    return (
        <div className="form-container">
            <h1>Contact Me</h1>
            <br />
            <br />
            <div className="form-input">
                <form onSubmit={handleSubmit}>
                    Name: <input type="text" onChange={handleInput} name="message_name"></input>
                    <br />
                    <br />
                    Email: <input type="text" onChange={handleInput} name="message_email"></input>
                    <br />
                    <br />
                    Subject: <input type="text" onChange={handleInput} name="message_subject"></input>
                    <br />
                    <br />
                    Message: <input type="text" onChange={handleInput} name="message"></input>
                    <br />
                    <br />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
