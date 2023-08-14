import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

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
                <div className="text-end">
                    <Link to="/AddEducation" className="btn btn-primary">
                        Add Education
                    </Link>
                </div>
                <br />
                {this.state.educations.map((education) => (
                    <li key={education.education_id}>
                        <p> School: {education.school_name}</p>
                        <p> Certificate: {education.certificate}</p>
                        <p> Date Obtained: {education.date_obtained}</p>
                        <p>
                            <Link to={`/education/${education.education_id}`} className="btn btn-success">
                                Update
                            </Link>
                            {'  '}/{'  '}
                            <Link to={`education/delete/${education.education_id}`} className="btn btn-danger">
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
        //                 .delete('/education/delete/' + id)
        //                 .then((res) => {
        //                     alert('Deleted');
        //                     navigate('/');
        //                 })
        //                 .catch((err) => console.log(err));
        //     }
        // }
    }
}
