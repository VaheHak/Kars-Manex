import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:5000`,
    headers: {},
});

class Users {

    static getUsers(token) {
        return api.get(`http://localhost:5000/profile`, {
            headers: {
                authorization: token,
            }
        })
    }

    static login(email, password) {
        return api.post(`/login`, {
            email,
            password,
        })
    }

    static postUsers(email, firstName, lastName, work, phone, password) {
        return api.post(`/register`, {
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
