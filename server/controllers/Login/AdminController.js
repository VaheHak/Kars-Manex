const HttpError = require('http-errors');
const jwt = require("jsonwebtoken");
const Admin = require("../../models/Admin/admin");

const {JWT_SECRET} = process.env;

class AdminController {

    static profile = async (req, res, next) => {
        try {
            const admin = await Admin.findByPk(req.adminId)
            res.json({
                admin
            });
        } catch (e) {
            next(e);
        }
    }
    static register = async (req, res, next) => {
        try {
            const {login, password} = req.body;
            const data = await Admin.create({
                login, password
            });
            res.json({
                status: 'ok',
                data
            });
        } catch (e) {
            next(e);
        }
    }

    static login = async (req, res, next) => {
        try {
            const {login, password} = req.body;
            const admin = await Admin.findOne({
                where: {
                    login,
                }
            });
            if (!admin || admin.getDataValue('password') !== Admin.passwordHash(password)) {
                throw HttpError(403, 'invalid email or password');
            }
            const token = jwt.sign({adminId: admin.id}, JWT_SECRET);
            res.json({
                status: 'ok',
                admin,
                token
            });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = AdminController;