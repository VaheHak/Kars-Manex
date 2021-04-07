const {Model, DataTypes} = require('sequelize');
const db = require("../../config/pool");
const Category_department = require("../../models/Categories/category_department");
const Category_section = require("../../models/Categories/category_section");
const Users = require("../../models/Users/user");

class Product extends Model {

}

Product.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    p_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
            const userId = this.getDataValue('id');
            const image = this.getDataValue('image');
            return `${global.serverUrl}/images/${userId}/${image}`;
        }
    },
    p_pictures: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
            const userId = this.getDataValue('id');
            const p_pictures = this.getDataValue('p_pictures');
            return `${global.serverUrl}/images/${userId}/${p_pictures}`;
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    c_section: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
    },
    star: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },

}, {
    sequelize: db,
    tableName: 'products',
    modelName: 'products',
});

Product.belongsTo(Category_department, {
    foreignKey: 'category_departmentId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
});
Category_department.hasOne(Product, {
    foreignKey: 'category_departmentId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'categoryDep'
});
Category_department.hasMany(Product, {
    foreignKey: 'category_departmentId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'categoryDeps'
});
Product.belongsTo(Category_section, {
    foreignKey: 'c_section',
    onUpdate: 'cascade',
    onDelete: 'cascade',
});
Category_section.hasOne(Product, {
    foreignKey: 'c_section',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'categorySection'
});
Category_section.hasMany(Product, {
    foreignKey: 'c_section',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'categorySections'
});

Product.belongsTo(Users, {
    foreignKey: 'user_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
});
Users.hasOne(Product, {
    foreignKey: 'user_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'product'
});
Users.hasMany(Product, {
    foreignKey: 'user_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'products'
});

module.exports = Product;
