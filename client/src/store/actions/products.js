export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';
export const STARED_PRODUCT_REQUEST = 'STARED_PRODUCT_REQUEST';
export const STARED_PRODUCT_SUCCESS = 'STARED_PRODUCT_SUCCESS';
export const STARED_PRODUCT_FAIL = 'STARED_PRODUCT_FAIL';
export const POST_PRODUCT_REQUEST = 'POST_PRODUCT_REQUEST';
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';
export const POST_PRODUCT_FAIL = 'POST_PRODUCT_FAIL';

export function getProductRequest(search, categoryId) {
    return {
        type: GET_PRODUCT_REQUEST,
        payload: {search, categoryId},
    }
}

export function getStarRequest(star) {
    return {
        type: STARED_PRODUCT_REQUEST,
        payload: {star},
    }
}

export function postProductRequest(
    name, address, phone, price, email, image, pictures, description, location,
    category_id, c_department, c_section, building_type, new_built, floor,
    room_numbers, bathRoom_numbers, area, user_id, star,) {
    return {
        type: POST_PRODUCT_REQUEST,
        payload: {
            name, address, phone, price, email,
            image, pictures, description,
            location, category_id, c_department,
            c_section, building_type, new_built,
            floor, room_numbers, bathRoom_numbers,
            area, user_id, star,
        }
    }
}
