import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Contact() {
    const [inputData, setInputData] = useState({ message_name: '', message_email: '', message_subject: '', message: '' });
    const navigate = useHistory();
    function handleSubmit(event) {
        event.preventDefault();

        axios
            .post('http://localhost:5000/message', inputData)
            .then((res) => {
                alert('Message sent');
                navigate('/Project');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Contact Me</h1>
                    <br />
                    <br />
                    <div>
                        <label htmlFor="message_name">Name: </label>
                        <input type="text" name="message_name" className="form-control" onChange={(e) => setInputData({ ...inputData, message_name: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="message_email">Email: </label>
                        <input type="text" name="message_email" className="form-control" onChange={(e) => setInputData({ ...inputData, message_email: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="message_subject">Subject: </label>
                        <input type="text" name="message_subject" className="form-control" onChange={(e) => setInputData({ ...inputData, message_subject: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="message">Message: </label>
                        <input type="text" name="message" className="form-control" onChange={(e) => setInputData({ ...inputData, message: e.target.value })} />
                    </div>
                    <br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
