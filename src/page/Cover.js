import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        covers: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/cover/365618f4-ce3a-4fa5-bcd8-0c3071f31376`).then((res) => {
            const covers = res.data;
            this.setState({ covers });
        });
    }

    render() {
        return (
            <ul>
                <h1>Cover Letter</h1>
                <br />
                <br />
                {this.state.covers.map((cover) => (
                    <ul key={cover.cover_id}>
                        <p>{cover.cover_title}</p>
                        <br />
                        <p> {cover.cover_info}</p>
                    </ul>
                ))}
            </ul>
        );
    }
}
