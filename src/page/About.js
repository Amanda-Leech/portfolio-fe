import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        abouts: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/about/9a0e2342-59bb-4772-b6f2-f84a0f64b353`).then((res) => {
            const abouts = res.data;
            this.setState({ abouts });
        });
    }

    render() {
        return (
            <ul>
                <h1>About Me</h1>
                <br />
                <br />
                {this.state.abouts.map((about) => (
                    <ul key={about.about_id}>
                        <p> Title: {about.about_title}</p>
                        <br />
                        <p> Info: {about.about_info}</p>
                    </ul>
                ))}
            </ul>
        );
    }
}
