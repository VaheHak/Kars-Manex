export const GET_CURRENCY_REQUEST = 'GET_CURRENCY_REQUEST';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_FAIL = 'GET_CURRENCY_FAIL';
export const GET_RATES_REQUEST = 'GET_RATES_REQUEST';
export const GET_RATES_SUCCESS = 'GET_RATES_SUCCESS';

export function getCurrencyRequest() {
    return {
        type: GET_CURRENCY_REQUEST,
    }
}

export function getRatesRequest(rate) {
    return {
        type: GET_RATES_REQUEST,
        payload: {rate},
    }
}