import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default class PersonList extends React.Component {
    state = {
        skills: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/skill`).then((res) => {
            const skills = res.data;
            this.setState({ skills });
        });
    }

    render() {
        return (
            <ul>
                <h1> Skills </h1>
                <br />
                <div className="text-end">
                    <Link to="/add-skill" className="btn btn-primary">
                        Add Skill
                    </Link>
                </div>
                <br />
                {this.state.skills.map((skill) => (
                    <li key={skill.skill_id}>
                        <p> Skill: {skill.skill_name}</p>
                        <p> Use: {skill.skill_use}</p>
                        <p>
                            <Link to={`/skill/${skill.skill_id}`} className="btn btn-success">
                                Update
                            </Link>
                            {'  '}/{'  '}
                            <Link to={`skill/delete/${skill.skill_id}`} className="btn btn-danger">
                                Delete
                            </Link>
                        </p>
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        );
        // function handleSubmit(id) {
        //         const conf = window.confirm('Are you sure?');
        //         if (conf) {
        //             axios
        //                 .delete('/skill/delete/' + id)
        //                 .then((res) => {
        //                     alert('Deleted');
        //                     navigate('/');
        //                 })
        //                 .catch((err) => console.log(err));
        //     }
        // }
    }
}
