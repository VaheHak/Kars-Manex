import {call, put, takeEvery} from "redux-saga/effects";
import * as userAction from "../actions/users";
import Users from "../Api/Users";

export default function* watcher() {
    yield takeEvery(userAction.GET_USER_REQUEST, handleGetUsers);
    yield takeEvery(userAction.POST_LOGIN_REQUEST, handlePostLogin);
}

function* handleGetUsers() {
    try {
        const {data} = yield call(Users.getUsers);
        yield put({
            type: userAction.GET_USER_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: userAction.GET_USER_FAIL,
            message: e.message,
        })
    }
}

function* handlePostLogin(action) {
    try {
        const {email, password} = action.payload;
        const {data} = yield call(Users.login, email, password);
        yield put({
            type: userAction.POST_LOGIN_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: userAction.POST_LOGIN_FAIL,
            message: e.message,
        })
    }
}
