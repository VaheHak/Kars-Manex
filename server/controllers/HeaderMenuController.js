const Header_menu = require("../models/Menus/header_menu");

class UsersController {

    static index = async (req, res, next) => {
        try {
            const menu = await Header_menu.findAll()
            res.json({
                menu
            });
        } catch (e) {
            next(e);
        }
    }

}

module.exports = UsersController;