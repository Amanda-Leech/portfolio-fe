import React from 'react';
import axios from 'axios';

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
                <br />
                {this.state.skills.map((skill) => (
                    <li key={skill.skill_id}>
                        <p> Skill: {skill.skill_name}</p>
                        <p> Project: {skill.skill_use}</p>
                        <br />
                    </li>
                ))}
            </ul>
        );
    }
}
