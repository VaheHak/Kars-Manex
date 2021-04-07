import * as actionTypes from "../actions/converter";

const initialState = {
    requestStatus: '',
    currencyNames: '',
    rateInfo: '',
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.GET_CURRENCY_REQUEST: {
            return {
                ...state,
                currencyNames: '',
                requestStatus: 'request',
            }
        }
        case actionTypes.GET_CURRENCY_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                currencyNames: action.payload.data
            }
        }
        case actionTypes.GET_RATES_REQUEST: {
            return {
                ...state,
                rateInfo: '',
                requestStatus: 'request',
            }
        }
        case actionTypes.GET_RATES_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                rateInfo: action.payload.data
            }
        }
        case actionTypes.GET_CURRENCY_FAIL: {
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
