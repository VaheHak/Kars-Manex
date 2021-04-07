import axios from "axios";

class Menus{
    static getHeaderMenu() {
        return axios.get(`${window.server}/headerMenu`)
    }
}

export default Menus;