const {Model, DataTypes} = require('sequelize');
const db = require("../../config/pool");
const Category = require("../../models/Categories/category");

class category_department extends Model {

}

category_department.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    c_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    c_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: db,
    tableName: 'category_department',
    modelName: 'category_department',
    timestamps: false,
});

category_department.belongsTo(Category, {
    foreignKey: 'c_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
});
Category.hasOne(category_department, {
    foreignKey: 'c_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'categoryDepartment'
});
Category.hasMany(category_department, {
    foreignKey: 'c_id',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'categoryDepartments'
});


module.exports = category_department;
