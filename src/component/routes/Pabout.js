import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import AdminPrivateRoute from './Private';
import Cookies from 'js-cookie';

function PrivateAbout({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return Cookies.get('user_name') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default PrivateAbout;
