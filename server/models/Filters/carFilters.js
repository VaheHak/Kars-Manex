const {Model, DataTypes} = require('sequelize');
const db = require("../../config/pool");
const Product = require("../../models/Product/product");

class CarFilters extends Model {

}

CarFilters.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    productId: {
        type: DataTypes.BIGINT.UNSIGNED,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bYear: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    bodyType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    run: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    horsepower: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    motor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    motorVolume: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    transmission: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    traction: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    wheel: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    customsCleared: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },

}, {
    sequelize: db,
    tableName: 'car_filter',
    modelName: 'car_filter',
});

CarFilters.belongsTo(Product, {
    foreignKey: 'productId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
});
Product.hasOne(CarFilters, {
    foreignKey: 'productId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'carFilter'
});

module.exports = CarFilters;
