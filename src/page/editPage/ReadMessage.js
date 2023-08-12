import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        messages: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/message`).then((res) => {
            const messages = res.data;
            this.setState({ messages });
        });
    }

    render() {
        return (
            <ul>
                <h1> Messages </h1>
                <br />
                <br />
                {this.state.messages.map((message) => (
                    <li key={message.message_id}>
                        <p> Name: {message.message_name}</p>
                        <p>Email: {message.message_email}</p>
                        <p> Subject: {message.message_subject}</p>
                        <p> Message: {message.message}</p>
                        <br />
                    </li>
                ))}
            </ul>
        );
    }
}
