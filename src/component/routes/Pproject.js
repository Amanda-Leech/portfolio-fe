import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

function PrivateProject({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return Cookies.get('user_name') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/Project',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default PrivateProject;
