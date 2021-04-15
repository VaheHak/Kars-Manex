const jwt = require('jsonwebtoken');

const {JWT_SECRET} = process.env;
const EXCLUDE = [
    '/login',
    '/register',
]

module.exports = function authorization(req, res, next) {
    try {
        const {authorization} = req.headers;
        const {url} = req;
        if (EXCLUDE.includes(url)) {
            next();
            return;
        }

        const token = authorization.replace("Bearer ", '');

        const data = jwt.verify(token, JWT_SECRET)
        req.userId = data.userId;
        next();
    } catch (e) {
        next(e);
    }
}
