import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

function PrivateSkill({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return Cookies.get('user_name') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/skill',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default PrivateSkill;
