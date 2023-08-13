import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false,
    authenticated(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

function AboutRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                return fakeAuth.isAuthenticated === true ? children : <Redirect to="/login" />;
            }}
        />
    );
}

function Login() {
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

    const login = () => {
        fakeAuth.authenticated(() => {
            setRedirectToReferrer(true);
        });
    };

    if (redirectToReferrer === true) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <p>Youmust log in to view this page</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}
