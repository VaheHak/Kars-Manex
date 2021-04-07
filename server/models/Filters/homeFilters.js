const {Model, DataTypes} = require('sequelize');
const db = require("../../config/pool");
const Product = require("../../models/Product/product");

class HomeFilters extends Model {

}

HomeFilters.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    productId: {
        type: DataTypes.BIGINT.UNSIGNED,
    },
    building_type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    new_built: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    floor: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    room_numbers: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    bathRoom_numbers: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    area: {
        type: DataTypes.STRING,
        allowNull: true,
    },

}, {
    sequelize: db,
    tableName: 'home_filter',
    modelName: 'home_filter',
});

HomeFilters.belongsTo(Product, {
    foreignKey: 'productId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
});
Product.hasOne(HomeFilters, {
    foreignKey: 'productId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'homeFilter'
});

module.exports = HomeFilters;
