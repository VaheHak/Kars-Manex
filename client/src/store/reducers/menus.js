import {GET_MENU_FAIL, GET_MENU_REQUEST, GET_MENU_SUCCESS} from "../actions/menus";

const initialState = {
    requestStatus: '',
    headerMenuInfo: [],
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case GET_MENU_REQUEST: {
            return {
                ...state,
                headerMenuInfo: [],
                requestStatus: 'request',
            }
        }
        case GET_MENU_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                headerMenuInfo: action.payload.data
            }
        }
        case GET_MENU_FAIL: {
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
