import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        educations: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/education`).then((res) => {
            const educations = res.data;
            this.setState({ educations });
        });
    }

    render() {
        return (
            <ul>
                <h1> Education </h1>
                <br />
                <br />
                {this.state.educations.map((education) => (
                    <li key={education.education_id}>
                        <p> School Name: {education.school_name}</p>
                        <p>Certificate: {education.certificate}</p>
                        <p> Date Obtained: {education.date_obtained}</p>
                        <br />
                    </li>
                ))}
            </ul>
        );
    }
}
