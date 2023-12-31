import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import AdminPrivateRoute from './Private';
import Cookies from 'js-cookie';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticated(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100)//fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)//fake async
//   }
// }

function PrivateCover({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return Cookies.get('user_name') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/Cover',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default PrivateCover;
