import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../component/AuthProvider';
// import Cookies from 'js-cookie';
import axios from '../component/axios';
const SKILL_URL = '/skill/';

const UpdateSkill = () => {
    const { setAuth } = useContext(AuthContext);
    const nameRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [use, setUse] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        nameRef.current.focus();
    }, []);
    useEffect(() => {
        setErrMsg('');
    }, [name, use]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(SKILL_URL, JSON.stringify({ name, use }), {
                headers: { 'Content-Type': 'application/json' },
                // withCredentials: true,
            });
            console.log(JSON.stringify(response?.data));
            const auth = response?.data?.auth;
            const role = response?.data?.role;
            const expiration = response?.data?.expiration;
            setAuth({ name, use, role, auth, expiration });
            Cookies.set('auth_token', auth);
            Cookies.set('user_role', role);
            Cookies.set('user_name', name);
            Cookies.set('auth_expires', expiration);
            setName('');
            setUse('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Incorect Email or Password');
            } else {
                setErrMsg('UpdateSkill Failed');
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
                        <label htmlFor="name">Email: </label>
                        <input type="text" id="name" ref={nameRef} autoComplete="off" onChange={(e) => setName(e.target.value)} value={name} required />
                        <br />
                        <br />
                        <label htmlFor="use">Password: </label>
                        <input type="use" id="use" onChange={(e) => setUse(e.target.value)} value={use} required />
                        <br />
                        <br />
                        <button>Sign In</button>
                    </form>
                </section>
            )}
        </>
    );
};

export default UpdateSkill;
