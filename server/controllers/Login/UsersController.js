const HttpError = require('http-errors');
const fs = require('fs');
const jwt = require("jsonwebtoken");
const Users = require("../../models/Users/user");

const {JWT_SECRET} = process.env;

class UsersController {

    static profile = async (req, res, next) => {
        try {
            await Users.findByPk(req.userId);
            res.json({
                status:"Ձեր մուտքը հաջողվել է"
            });
        } catch (e) {
            next(e);
        }
    }
    static register = async (req, res, next) => {
        try {
            const {file} = req;
            const {firstName, lastName, work, email, phone, password} = req.body;
            const user = await Users.create({
                firstName, lastName, work, email, phone, password
            });
            const fileTypes = {
                'image/jpeg': '.jpg',
                'image/png': '.png',
                'image/gif': '.gif'
            }

            if (file) {
                const imageDir = `public/images/${user.id}/`;
                if (!fs.existsSync(imageDir)) {
                    fs.mkdirSync(imageDir, {recursive: true})
                }
                const avatar = file.fieldname + '-' + Date.now() + fileTypes[file.mimetype];
                fs.writeFileSync(imageDir + avatar, file.buffer);

                user.avatar = avatar;
                await user.save();
            }
            res.json({
                status: 'ok',
                user
            });
        } catch (e) {
            next(e);
        }
    }

    static login = async (req, res, next) => {
        try {
            const {email, password} = req.body;
            const user = await Users.findOne({
                where: {
                    email,
                }
            });

            if (!user || user.getDataValue('password') !== Users.passwordHash(password)) {
                throw HttpError(403, 'invalid email or password');
            }
            const token = jwt.sign({userId: user.id}, JWT_SECRET);
            res.json({
                status: 'ok',
                user,
                token,
            });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = UsersController;
