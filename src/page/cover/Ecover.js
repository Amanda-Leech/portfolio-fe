import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default class PersonList extends React.Component {
    state = {
        covers: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/cover`).then((res) => {
            const covers = res.data;
            this.setState({ covers });
        });
    }

    render() {
        return (
            <ul>
                <h1> Cover </h1>
                <br />
                {/* <div className="text-end">
                    <Link to="/add-cover" className="btn btn-primary">
                        Add Cover
                    </Link>
                </div> */}
                <br />
                {this.state.covers.map((cover) => (
                    <li key={cover.cover_id}>
                        <p> Title: {cover.cover_title}</p>
                        <p> Body: {cover.cover_info}</p>
                        <p>
                            <Link to={`/cover/id/${cover.cover_id}`} className="btn btn-success">
                                Update
                            </Link>
                            {'  '}/{'  '}
                            <Link to={`cover/delete/${cover.cover_id}`} className="btn btn-danger">
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
        //                 .delete('/cover/delete/' + id)
        //                 .then((res) => {
        //                     alert('Deleted');
        //                     navigate('/');
        //                 })
        //                 .catch((err) => console.log(err));
        //     }
        // }
    }
}
