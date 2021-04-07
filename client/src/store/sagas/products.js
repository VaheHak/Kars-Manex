import {takeEvery, call, put} from "redux-saga/effects";
import * as actionProduct from "../actions/products";
import Products from "../Api/Products";

export default function* watcher() {
    yield takeEvery(actionProduct.GET_PRODUCT_REQUEST, handleGetHomeProducts)
    yield takeEvery(actionProduct.STARED_PRODUCT_REQUEST, handleGetStarProducts)
    yield takeEvery(actionProduct.POST_PRODUCT_REQUEST, handlePostProducts)
}

function* handleGetHomeProducts(action) {
    try {
        const {search, categoryId} = action.payload;
        const {data} = yield call(Products.getHomeProducts, search, categoryId);
        yield put({
            type: actionProduct.GET_PRODUCT_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: actionProduct.GET_PRODUCT_FAIL,
            message: e.message,
        })
    }
}

function* handleGetStarProducts(action) {
    try {
        const {star} = action.payload;
        const {data} = yield call(Products.getStarProducts, star);
        yield put({
            type: actionProduct.STARED_PRODUCT_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: actionProduct.STARED_PRODUCT_FAIL,
            message: e.message,
        })
    }
}

function* handlePostProducts(action) {
    try {
        const {
            name, address, phone, price, email, image, pictures, description, location,
            category_id, c_department, c_section, building_type, new_built, floor,
            room_numbers, bathRoom_numbers, area, user_id, star,
        } = action.payload;
        const {data} = yield call(Products.postProducts, name, address, phone, price, email, image, pictures, description, location,
            category_id, c_department, c_section, building_type, new_built, floor,
            room_numbers, bathRoom_numbers, area, user_id, star,);
        yield put({
            type: actionProduct.POST_PRODUCT_SUCCESS,
            payload: {
                data,
            }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: actionProduct.POST_PRODUCT_FAIL,
            message: e.message,
        })
    }
}
