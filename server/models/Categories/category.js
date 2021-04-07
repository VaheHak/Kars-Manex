const {Model, DataTypes} = require('sequelize');
const db = require("../../config/pool");

class category extends Model {

}

category.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    c_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db,
    tableName: 'category',
    modelName: 'category',
    timestamps: false,
});

module.exports = category;
