const {Model, DataTypes} = require('sequelize');
const db = require("../../config/pool");

class Header_menu extends Model {

}

Header_menu.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    page_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db,
    tableName: 'header_menu',
    modelName: 'header_menu',
    timestamps: false,
});

module.exports = Header_menu;
