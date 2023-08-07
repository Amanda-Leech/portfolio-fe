import { awaitAPICall } from './apiWrapper';
import Cookies from 'js-cookie';

export default function logout(props = null) {
    let body = {};
    let auth = Cookies.get('auth');
    if (auth) {
        body['auth'] = auth;
    }
    let user_id = Cookies.get('user_id');
    if (user_id) {
        body['user_id'] = user_id;
    }
    Cookies.remove('auth');
    Cookies.remove('role');
    Cookies.remove('email');
    Cookies.remove('auth_expires');

    awaitAPICall(
        `/user/logout`,
        'DELETE',
        body,
        null,
        (data) => {
            if (props) {
                props.setAuthToken(null);
            }
        },
        null
    );
    if (props) {
        props.history.push('/login');
    }
}
