import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../component/AuthProvider';
import Cookies from 'js-cookie';
import axios from '../component/axios';
const LOGIN_URL = '/user/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);
    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
                headers: { 'Content-Type': 'application/json' },
                // withCredentials: true,
            });
            console.log(JSON.stringify(response?.data));
            const auth = response?.data?.auth;
            const role = response?.data?.role;
            const expiration = response?.data?.expiration;
            setAuth({ email, password, role, auth, expiration });
            Cookies.set('auth_token', auth);
            Cookies.set('user_role', role);
            Cookies.set('user_name', email);
            Cookies.set('auth_expires', expiration);
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Incorect Email or Password');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>You can now edit your info!</h1>
                    <br />
                    {/* <p>
                            <a href="#">Go to Home</a>
                        </p> */}
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Edit</h1>
                    <br />
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" ref={emailRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={email} required />
                        <br />
                        <br />
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" onChange={(e) => setPwd(e.target.value)} value={password} required />
                        <br />
                        <br />
                        <button>Sign In</button>
                    </form>
                </section>
            )}
        </>
    );
};

export default Login;
