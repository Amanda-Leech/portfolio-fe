import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        contacts: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/contact/Amanda_Leech`).then((res) => {
            const contacts = res.data;
            this.setState({ contacts });
        });
    }

    render() {
        return (
            <ul>
                <h1>Info</h1>
                <br />
                <br />
                {this.state.contacts.map((contact) => (
                    <ul key={contact.contact_id}>
                        <p> Name: {contact.contact_name}</p>
                        <br />
                        <a href={contact.linked_in}> LinkedIn: {contact.linked_in}</a>
                        <br />
                        <br />
                        <a href={contact.git_hub}> Github: {contact.git_hub}</a>
                        <br />
                        <br />
                        <p> Phone: {contact.phone}</p>
                        <br />
                        <p> Email: {contact.email}</p>
                        <br />
                        <a href="https://goo.gl/maps/q4YGut4UyBBVcHA48" className="address-link" target="_blank" rel="noreferrer">
                            {' '}
                            Address: {contact.address}
                        </a>
                    </ul>
                ))}
            </ul>
        );
    }
}
