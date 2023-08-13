import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        auth: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/auth`).then((res) => {
            const auth = res.data;
            this.setState({ auth });
        });
    }

    render() {
        return (
            <ul>
                <h1> Logged In </h1>
                <br />
                <br />
                {this.state.auth.map((auth) => (
                    <li key={auth.auth}>
                        {/* <p> auth: {auth.auth}</p> */}
                        <p>User: {auth.user.email}</p>
                        <p>Time: {auth.now_datetime}</p>
                        <p>Role: {auth.user.role}</p>
                        <br />
                    </li>
                ))}
            </ul>
        );
    }
}
