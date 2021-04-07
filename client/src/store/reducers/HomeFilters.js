import * as categoryAction from "../actions/HomeFilters";

const initialState = {
    requestStatus: '',
    category: [],
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case categoryAction.GET_CATEGORY_REQUEST: {
            return {
                ...state,
                category: [],
                requestStatus: 'request',
            }
        }
        case categoryAction.GET_CATEGORY_SUCCESS: {
            return {
                ...state,
                requestStatus: 'success',
                category: action.payload.data
            }
        }
        case categoryAction.GET_CATEGORY_FAIL: {
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
