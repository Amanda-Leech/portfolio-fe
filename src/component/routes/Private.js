import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
// import MasterLayout from './layout/admin/MasterLayout';
import { cleanup } from '@testing-library/react';

function AdminPrivateRoute({ ...rest }) {
    const history = useHistory();
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/auth`).then((res) => {
            if (res.status === 200) {
                setAuthenticated(true);
            }
            setLoading(false);
        });
        return () => {
            setAuthenticated(false);
        };
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if (err.response.status === 401) {
            swal('Unauthorized', err.response.data.message, 'warning');
            history.pushState(`/`);
        }
        return Promise.reject(err);
    });

    if (loading) {
        return <h1>Loading...</h1>;
    }

    // return (
    //   <Route {...rest}
    //   render={ ({props, location}) =>
    //     Cookies.get.("email") ?
    //     (<MasterLayout {...props} />):
    //     (<Redirect to={{pathname: }}/>)
    //   } />
    // )
}

export default AdminPrivateRoute;
