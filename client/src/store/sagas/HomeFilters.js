import {call, put, takeLatest} from "redux-saga/effects";
import * as categoryAction from "../actions/HomeFilters";
import HomeFilters from "../Api/HomeFilters";

export default function* watcher() {
    yield takeLatest(categoryAction.GET_CATEGORY_REQUEST, handleGetCategories)
}

function* handleGetCategories(action) {
    try {
        const {id, c_name} = action.payload;
        const {data} = yield call(HomeFilters.getCategories, id, c_name);
        yield put({
            type: categoryAction.GET_CATEGORY_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: categoryAction.GET_CATEGORY_FAIL,
            message: e.message,
        })
    }
}
