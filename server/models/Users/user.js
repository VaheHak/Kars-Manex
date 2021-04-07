const {Model, DataTypes} = require('sequelize');
const md5 = require('md5');
const db = require("../../config/pool");

class Users extends Model {

    static passwordHash = (pass) => {
        return md5(md5(pass + '_test'))
    }

}

Users.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    work: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
            const userId = this.getDataValue('id');
            const avatar = this.getDataValue('avatar');
            return `${global.serverUrl}/images/${userId}/${avatar}`;
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'email',
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'phone',
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
            this.setDataValue('password', Users.passwordHash(val))
        },
        get() {
            return undefined;
        }
    },
}, {
    sequelize: db,
    tableName: 'users',
    modelName: 'users',
});

module.exports = Users;
