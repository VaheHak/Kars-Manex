import * as actionProduct from "../actions/products";

const initialState = {
    requestStatus: '',
    productInfo: [],
    staredInfo: [],
    postProductInfo: [],
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case actionProduct.GET_PRODUCT_REQUEST: {
            return {
                ...state,
                productInfo: [],
                requestStatus: 'request',
            }
        }
        case actionProduct.GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                productInfo: action.payload.data
            }
        }
        case actionProduct.GET_PRODUCT_FAIL: {
            return {
                ...state,
                requestStatus: 'fail',
            }
        }
        case actionProduct.STARED_PRODUCT_REQUEST: {
            return {
                ...state,
                staredInfo: [],
                requestStatus: 'request',
            }
        }
        case actionProduct.STARED_PRODUCT_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                staredInfo: action.payload.data
            }
        }
        case actionProduct.STARED_PRODUCT_FAIL: {
            return {
                ...state,
                requestStatus: 'fail',
            }
        }
        case actionProduct.POST_PRODUCT_REQUEST: {
            return {
                ...state,
                postProductInfo: [],
                requestStatus: 'request',
            }
        }
        case actionProduct.POST_PRODUCT_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                postProductInfo: action.payload.data
            }
        }
        case actionProduct.POST_PRODUCT_FAIL: {
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
