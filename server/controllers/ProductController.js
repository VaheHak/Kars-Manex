const Product = require("../models/Product/product");
const HomeFilter = require("../models/Filters/homeFilters");
const CarFilter = require("../models/Filters/carFilters");
const Category_department = require("../models/Categories/category_department");
const Category_section = require("../models/Categories/category_section");

class ProductController {

    static getAllHomes = async (req, res, next) => {
        try {
            const {search, categoryId} = req.query;
            const product = await Product.findAll({
                include: [{
                    model: HomeFilter,
                    as: 'homeFilter',
                }, {
                    model: CarFilter,
                    as: 'carFilter',
                }, {
                    model: Category_department,
                }, {
                    model: Category_section,
                }],
                where: [{
                    $and: [
                        {category_id: categoryId},
                        {
                            $or: [
                                {p_name: {$like: `%${search}%`}},
                                {address: {$like: `%${search}%`}},
                                {location: {$like: `%${search}%`}},
                                {price: {$like: `%${search}%`}},
                            ]
                        }
                    ]
                }]
            });
            res.json({
                product
            });
        } catch (e) {
            next(e);
        }
    }
    static getStaredProduct = async (req, res, next) => {
        try {
            const {star} = req.query;
            const product = await Product.findAll({
                include: [{
                    model: HomeFilter,
                    as: 'homeFilter',
                }, {
                    model: CarFilter,
                    as: 'carFilter',
                }, {
                    model: Category_department,
                }, {
                    model: Category_section,
                }],
                where: [{
                    star: star
                }]
            });
            res.json({
                product
            });
        } catch (e) {
            next(e);
        }
    }
    static postProduct = async (req, res, next) => {
        try {
            const {
                p_name, address, phone, price, email, file, files, description, location,
                category_id, c_department, c_section, building_type, new_built, floor,
                room_numbers, bathRoom_numbers, area, user_id, star = 0,
            } = req.body;
            const product = await Product.create({
                p_name, address, phone, price, email, description, location,
                category_id, c_department, c_section, user_id, star,
            });
            const homeFilter = await HomeFilter.create({
                building_type, new_built, floor, room_numbers, bathRoom_numbers, area,
            });
            const fileTypes = {
                'image/jpeg': '.jpg',
                'image/png': '.png',
                'image/gif': '.gif'
            }

            const imageDir = `public/uploads/${product.id}/`;
            if (!fs.existsSync(imageDir)) {
                fs.mkdirSync(imageDir, {recursive: true})
            }
            const image = file.fieldname + '-' + Date.now() + fileTypes[file.mimetype];
            fs.writeFileSync(imageDir + image, file.buffer);

            const p_pictures = files.fieldname + '-' + Date.now() + fileTypes[files.mimetype];
            fs.writeFileSync(imageDir + p_pictures, files.buffer);

            product.image = image;
            product.p_pictures = p_pictures;
            await product.save();

            res.json({
                status: 'ok',
                product,
                homeFilter,
            });
        } catch (e) {
            next(e);
        }
    }

}

module.exports = ProductController;
