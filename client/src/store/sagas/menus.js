import {takeLatest, call, put} from "redux-saga/effects";
import {GET_MENU_FAIL, GET_MENU_REQUEST, GET_MENU_SUCCESS} from "../actions/menus";
import Menus from "../Api/Menus";

export default function* watcher() {
    yield takeLatest(GET_MENU_REQUEST, handleGetHeaderMenu)
}

function* handleGetHeaderMenu() {
    try {
        const {data} = yield call(Menus.getHeaderMenu);
        yield put({
            type: GET_MENU_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: GET_MENU_FAIL,
            message: e.message,
        })
    }
}
