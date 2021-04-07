const Users = require("../models/Users/user");
const Product = require("../models/Product/product");
const Category = require("../models/Categories/category");
const Category_department = require("../models/Categories/category_department");
const Category_section = require("../models/Categories/category_section");
const Converter = require("../models/Converter/converter_rate");
const Menus = require("../models/Menus/header_menu");
const Admin = require("../models/Admin/admin");
const HomeFilters = require("../models/Filters/homeFilters");
const CarFilters = require("../models/Filters/carFilters");

async function main() {
    const models = [
        Product,
        Category,
        Category_department,
        Category_section,
        Converter,
        Menus,
        Admin,
        Users,
        HomeFilters,
        CarFilters,
    ]
    for (const i in models){
        console.log('--->', i)
        await models[i].sync({ alter: true });
    }
    process.exit();
}

main().then(r => console.log(r --> 'Done')).catch(e => console.log(e));
