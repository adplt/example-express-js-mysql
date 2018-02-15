const Sequelize = require('sequelize');
const db = require('./index');

const Users = db.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
}, {
  classMethods: {}, // for custom query
  freezeTableName: true,
});

module.exports = Users;
