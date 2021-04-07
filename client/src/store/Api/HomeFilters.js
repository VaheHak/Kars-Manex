import axios from "axios";

class HomeFilters {

    static getCategories(id,c_name) {
        return axios.get(`${window.server}/categories`,{
            params:{
                id,
                c_name,
            }
        }).catch(err => {
            console.log('Category' + err)
        })
    }

}

export default HomeFilters;
