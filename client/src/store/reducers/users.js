import * as userAction from "../actions/users";
import Account from '../../helpers/Account';

const initialState = {
    requestStatus: '',
    loginInfo: '',
    myAccount: Account.get(),
    token: Account.getToken(),
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case userAction.GET_USER_REQUEST: {
            return {
                ...state,
                loginInfo: '',
                requestStatus: 'request',
            }
        }
        case userAction.GET_USER_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                loginInfo: action.payload.data
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
                token: '',
                myAccount: {},
                requestStatus: 'request',
            }
        }
        case userAction.POST_LOGIN_SUCCESS: {
            const {token, user: myAccount} = action.payload.data;
            Account.set(myAccount);
            Account.setToken(token);
            return {
                ...state,
                requestStatus: 'success',
                token,
                myAccount
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
