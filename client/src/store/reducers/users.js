import * as userAction from "../actions/users";

const initialState = {
    requestStatus: '',
    userInfo: [],
    loginInfo: '',
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case userAction.GET_USER_REQUEST: {
            return {
                ...state,
                userInfo: [],
                requestStatus: 'request',
            }
        }
        case userAction.GET_USER_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                userInfo: action.payload.data
            }
        }
        case userAction.GET_USER_FAIL: {
            return {
                ...state,
                requestStatus: 'fail',
            }
        }
        case userAction.POST_LOGIN_REQUEST: {
            return {
                ...state,
                loginInfo: '',
                requestStatus: 'request',
            }
        }
        case userAction.POST_LOGIN_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                loginInfo: action.payload.data
            }
        }
        case userAction.POST_LOGIN_FAIL: {
            return {
                ...state,
                requestStatus: 'fail',
            }
        }
        default: {
            return state;
        }
    }
}
