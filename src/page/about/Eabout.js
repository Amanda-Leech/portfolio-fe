import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default class PersonList extends React.Component {
    state = {
        abouts: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/about`).then((res) => {
            const abouts = res.data;
            this.setState({ abouts });
        });
    }

    render() {
        return (
            <ul>
                <h1> About </h1>
                <br />
                {/* <div className="text-end">
                    <Link to="/add-about" className="btn btn-primary">
                        Add About
                    </Link>
                </div> */}
                <br />
                {this.state.abouts.map((about) => (
                    <li key={about.about_id}>
                        <p> Title: {about.about_title}</p>
                        <p> Body: {about.about_info}</p>
                        <p>
                            <Link to={`/about/id/${about.about_id}`} className="btn btn-success">
                                Update
                            </Link>
                            {'  '}/{'  '}
                            <Link to={`about/delete/${about.about_id}`} className="btn btn-danger">
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
        //                 .delete('/about/delete/' + id)
        //                 .then((res) => {
        //                     alert('Deleted');
        //                     navigate('/');
        //                 })
        //                 .catch((err) => console.log(err));
        //     }
        // }
    }
}
