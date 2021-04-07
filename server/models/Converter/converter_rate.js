const {Model, DataTypes} = require('sequelize');
const db = require("../../config/pool");

class converter_rate extends Model {

}

converter_rate.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db,
    tableName: 'currency',
    modelName: 'currency',
    timestamps: false,
});

module.exports = converter_rate;