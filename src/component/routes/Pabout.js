import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
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
                            pathname: '/About',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default PrivateAbout;
