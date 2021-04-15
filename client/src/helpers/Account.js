class Account {
    static get() {
        try {
            return JSON.parse(localStorage.getItem('account')) || {};
        } catch (e) {
            return {};
        }
    }

    static set(account) {
        localStorage.setItem('account', JSON.stringify(account));
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static setToken(token, remember) {
        localStorage.setItem('token', token);
    }

    static delete() {
        localStorage.removeItem('account');
        localStorage.removeItem('token');
    }
}

export default Account
