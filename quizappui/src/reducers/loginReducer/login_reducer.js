import { LOGIN_ACTION, LOGIN_ACTION_REJECTED } from '../../actions/index';

export default function (state = null, action) {

    switch (action.type) {
        case LOGIN_ACTION:
            const token = action.payload.data.access_token;
            sessionStorage.setItem('auth_token', token);
            return action.payload.data;
        case LOGIN_ACTION_REJECTED:
            return action.payload.data;
    }
    return state;
}