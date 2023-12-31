import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
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
