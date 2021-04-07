import {takeEvery, call, put} from "redux-saga/effects";
import * as actionTypes from "../actions/converter";
import Converter from "../Api/Converter";

export default function* watcher() {
    yield takeEvery(actionTypes.GET_CURRENCY_REQUEST, handleGetCurrency)
    yield takeEvery(actionTypes.GET_RATES_REQUEST, handleGetRates)
}

function* handleGetCurrency() {
    try {
        const {data} = yield call(Converter.getCurrency);
        yield put({
            type: actionTypes.GET_CURRENCY_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: actionTypes.GET_CURRENCY_FAIL,
            message: e.message,
        })
    }
}

function* handleGetRates(action) {
    try {
        const {rate} = action.payload;

        const {data} = yield call(Converter.getRates, rate);
        yield put({
            type: actionTypes.GET_RATES_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: actionTypes.GET_CURRENCY_FAIL,
            message: e.message,
        })
    }
}
