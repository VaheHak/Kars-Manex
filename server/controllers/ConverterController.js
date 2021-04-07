const currency = require("../models/Converter/converter_rate");

class UsersController {

    static index = async (req, res, next) => {
        try {
            const rate = await currency.findAll();
            res.json({
                rate
            });
        } catch (e) {
            next(e);
        }
    }

}

module.exports = UsersController;