import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddSkill() {
    const [inputData, setInputData] = useState({ skill_name: '', skill_use: '' });
    const navigate = useHistory();
    function handleSubmit(event) {
        event.preventDefault();

        axios
            .post('http://localhost:5000/skill', inputData)
            .then((res) => {
                alert('Skill added successfully!');
                navigate('/Skill');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <h1>Add Skill</h1>
                    <br />
                    <br />
                    <div>
                        <label htmlFor="skill_name">Skill: </label>
                        <input type="text" name="skill_name" className="form-control" onChange={(e) => setInputData({ ...inputData, skill_name: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="skill_use">Use: </label>
                        <input type="texy" name="skill_use" className="form-control" onChange={(e) => setInputData({ ...inputData, skill_use: e.target.value })} />
                    </div>
                    <br />
                    <br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddSkill;
