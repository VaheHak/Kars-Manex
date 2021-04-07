import axios from "axios";

class Users {

    static getUsers() {
        return axios.get(`${window.server}/profile`)
    }

    static login(email, password) {
        return axios.post(`${window.server}/login`, {
            email,
            password,
        })
    }

    static postUsers(email, firstName, lastName, work, phone, password) {
        return axios.post(`${window.server}/register`, {
            email: email,
            firstName: firstName,
            lastName: lastName,
            work: work,
            phone: phone,
            password: password,
        })
    }

}

export default Users;