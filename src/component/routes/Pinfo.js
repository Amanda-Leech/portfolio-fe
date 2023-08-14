import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import AdminPrivateRoute from './Private';
import Cookies from 'js-cookie';

function PrivateInfo({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return Cookies.get('user_name') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/Info',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default PrivateInfo;
