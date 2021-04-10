export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export function getUserRequest(token) {
    return {
        type: GET_USER_REQUEST,
        payload: {token}
    }
}

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAIL = 'POST_LOGIN_FAIL';

export function postLoginRequest(email, password) {
    return {
        type: POST_LOGIN_REQUEST,
        payload: {email, password}
    }
}
