const {Model, DataTypes} = require('sequelize');
const md5 = require('md5');
const db = require("../../config/pool");

class admin extends Model {

    static passwordHash = (pass) => {
        return md5(md5(pass + '_test'))
    }

}

admin.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
            this.setDataValue('password', admin.passwordHash(val))
        },
        get() {
            return undefined;
        }
    },
}, {
    sequelize: db,
    tableName: 'admin',
    modelName: 'admin',
    timestamps: false,
});

module.exports = admin;