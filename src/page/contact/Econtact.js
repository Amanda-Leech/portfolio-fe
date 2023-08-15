import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default class PersonList extends React.Component {
    state = {
        contacts: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/contact`).then((res) => {
            const contacts = res.data;
            this.setState({ contacts });
        });
    }

    render() {
        return (
            <ul>
                <h1> Contact </h1>
                <br />
                {/* <div className="text-end">
                    <Link to="/add-contact" className="btn btn-primary">
                        Add Contact
                    </Link>
                </div> */}
                <br />
                {this.state.contacts.map((contact) => (
                    <li key={contact.contact_id}>
                        {/* <p>{contact.contact_id}</p> */}
                        <p> Name: {contact.contact_name}</p>
                        <p> LinkedIn: {contact.linked_in}</p>
                        <p> Get Hub: {contact.git_hub}</p>
                        <p> Phone: {contact.phone}</p>
                        <p> Email: {contact.email}</p>
                        <p> Address: {contact.address}</p>
                        <p>
                            <Link to={`/contact/id/${contact.contact_id}`} className="btn btn-success">
                                Update
                            </Link>
                            {'  '}/{'  '}
                            <Link to={`contact/delete/${contact.contact_id}`} className="btn btn-danger">
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
        //                 .delete('/contact/delete/' + id)
        //                 .then((res) => {
        //                     alert('Deleted');
        //                     navigate('/');
        //                 })
        //                 .catch((err) => console.log(err));
        //     }
        // }
    }
}
