import axios from "axios";
import serialize from 'form-serialize';

class Products {

    static getHomeProducts(search, categoryId) {
        return axios.get(`${window.server}/homeProducts`, {
            params: {
                search,
                categoryId,
            }
        })
    }

    static getStarProducts(star) {
        return axios.get(`${window.server}/starProducts`, {
            params: {
                star,
            }
        })
    }

    static postProducts(p_name, address, phone, price, email, image, p_pictures, description, location,
                        category_id, c_department, c_section, building_type, new_built, floor,
                        room_numbers, bathRoom_numbers, area, user_id, star,) {
        const data = new FormData();
        data.append('file', image, image.name);
        const pic = serialize(data, {hash: true, empty: true})
        return axios.post(`${window.server}/product`, {
            p_name,
            address,
            phone,
            price,
            email,
            image: pic,
            p_pictures,
            description,
            location,
            category_id,
            c_department,
            c_section,
            building_type,
            new_built,
            floor,
            room_numbers,
            bathRoom_numbers,
            area,
            user_id,
            star,
        })
    }
}

export default Products;
