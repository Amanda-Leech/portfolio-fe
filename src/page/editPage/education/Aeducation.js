import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddEducation() {
    const [inputData, setInputData] = useState({ school_name: '', certificate: '', date_obtained: '' });
    const navigate = useHistory();
    function handleSubmit(event) {
        event.preventDefault();

        axios
            .post('http://localhost:5000/education', inputData)
            .then((res) => {
                alert('Education added successfully!');
                navigate('/Education');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Add Education</h1>
                    <br />
                    <br />
                    <div>
                        <label htmlFor="school_name">Education: </label>
                        <input type="text" name="school_name" className="form-control" onChange={(e) => setInputData({ ...inputData, school_name: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="certificate">Use: </label>
                        <input type="texy" name="certificate" className="form-control" onChange={(e) => setInputData({ ...inputData, certificate: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="date_obtained">Use: </label>
                        <input type="texy" name="date_obtained" className="form-control" onChange={(e) => setInputData({ ...inputData, date_obtained: e.target.value })} />
                    </div>
                    <br />
                    <br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddEducation;
