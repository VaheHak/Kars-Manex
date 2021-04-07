const {Model, DataTypes} = require('sequelize');
const db = require("../../config/pool");
const Category_department = require("../../models/Categories/category_department");

class category_section extends Model {

}

category_section.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: db,
    tableName: 'category_section',
    modelName: 'category_section',
    timestamps: false,
});
category_section.belongsTo(Category_department, {
    foreignKey: 'category_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
});


Category_department.hasOne(category_section, {
    foreignKey: 'category_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'categorySection'
});
Category_department.hasMany(category_section, {
    foreignKey: 'category_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'categorySections'
});

module.exports = category_section;
