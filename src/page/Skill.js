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
                SKILLS
                <p>------</p>
                {this.state.skills.map((skill) => (
                    <li key={skill.skill_id}>
                        <p> Skill: {skill.skill_name}</p>
                        <p> Use: {skill.skill_use}</p>
                        <p>-</p>
                    </li>
                ))}
            </ul>
        );
    }
}
