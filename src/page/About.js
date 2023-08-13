import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        abouts: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/about/Amanda`).then((res) => {
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
                        {/* <p> Title: {about.about_title}</p>
                        <br /> */}
                        <p> {about.about_info}</p>
                    </ul>
                ))}
            </ul>
        );
    }
}
